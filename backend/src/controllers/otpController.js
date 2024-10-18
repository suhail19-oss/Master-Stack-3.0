const generateOTP = require("../config/generateOTP");
const OTP = require("../model/OTPModel");
const sendEmail = require("../config/sendEmail");
const { encrypt, comparePassword } = require("../config/password");

const { AUTH_EMAIL } = process.env;

const verifyOTP = async ({ email, otp }) => {
  try {
    if (!(email && otp)) {
      throw Error("Provide the values of email and otp");
    }

    //ensure otp record exists
    const matchedOTPRecord = await OTP.findOne({
      email,
    });
    if (!matchedOTPRecord) {
      throw Error("No otp record found");
    }

    const { expiresAt } = matchedOTPRecord;

    if (expiresAt < Date.now()) {
      await OTP.deleteOne({ email });
      throw Error("Code has expired. Request for a new one");
    }
    //not expired yet, verify the value
    const hashedOTP = matchedOTPRecord.otp;
    const validOTP = await comparePassword(otp, hashedOTP);
    return validOTP;
  } catch (error) {
    throw error;
  }
};

const sendOTP = async ({ email, subject, message, duration = 1 }) => {
  try {
    if (!(email && subject && message)) {
      throw Error("Provide valid values");
    }

    // for deleteing old records
    await OTP.deleteOne({ email });

    //generate otp
    const generatedOTP = await generateOTP();

    //send email
    const mailOptions = {
      from: AUTH_EMAIL,
      to: email,
      subject,
      html: `<p>${message}</p><p style="color:tomato; font-size:25px;letter-spcaing:2px;"><b>${generatedOTP}</b></p><p>This code expires in ${duration} minute(s)</b>.</p>`,
    };
    await sendEmail(mailOptions);

    const hashedOTP = await encrypt(generatedOTP);
    const newOTP = await new OTP({
      email,
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 60000 * duration,
    });
    const createdOTPRecord = await newOTP.save();
    return createdOTPRecord;
  } catch (error) {
    throw error;
  }
};

const deleteOTP = async (email) => {
  try {
    await OTP.deleteOne({ email });
  } catch (error) {
    throw error;
  }
};

module.exports = { sendOTP, verifyOTP, deleteOTP };
