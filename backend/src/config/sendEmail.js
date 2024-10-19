import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const { AUTH_EMAIL, AUTH_PASS } = process.env;
console.log(AUTH_EMAIL, AUTH_PASS);

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
  },
});

// test transporter
transporter.verify((error, success) => {
  if (error) {
    // console.log("Transformer Error : ");
    // console.log(error);
  } else {
    // console.log("ready for message");
    // console.log(success);
  }
});

export const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    return;
  } catch (error) {
    throw error;
  }
};


