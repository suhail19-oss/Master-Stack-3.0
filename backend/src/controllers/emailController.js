import Person from "../model/personModel.js"
import { sendOTP, verifyOTP, deleteOTP } from "./otpController.js"
import { generateToken } from "../config/generateToken.js"

export const verifyUserEmailController = async (req, res) => {
    try {
        const { email, otp } = req.body
        if (!(email && otp)) throw Error("Empty otp details not allowed")
        const validOTP = await verifyOTP({ email, otp })
        if (!validOTP) {
            throw Error("Invalid code passed. Check your inbox")
        }
        await Person.updateOne({ email }, { isVerified: true })

        await deleteOTP(email)
        const savedUser = await Person.findOne({ email })
        console.log(savedUser)
        res.status(200).json({
            success: true,
            adm_no: savedUser.adm_no,
            email: savedUser.email,
            name: savedUser.name,
            category: savedUser.category,
            grad_year: savedUser.grad_year,
            token: generateToken(savedUser._id),
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Server Error",
        })
    }
}

export const sendVerificationOTPEmail = async (email) => {
    try {
        if (!email) throw Error("Empty email not allowed")
        const exsistingUser = await Person.findOne({ email })
        if (!exsistingUser) {
            throw Error("There's no account for the provided")
        }

        const otpDetails = {
            email,
            subject: "Email Verification",
            message: "Verify your email with the code below",
            duration: 10,
        }
        await sendOTP(otpDetails)
    } catch (error) {
        throw error
    }
}

