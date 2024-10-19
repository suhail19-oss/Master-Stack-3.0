import mongoose from "mongoose";
const { Schema } = mongoose;

const OTPSchema = new Schema({
    email: { type: String, unique: true, required: true },
    otp: String,
    createdAt: Date,
    expiresAt: Date,
});

const OTP = mongoose.model("OTP", OTPSchema);

export default OTP;
