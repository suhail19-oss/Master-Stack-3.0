import Person from "../model/personModel.js"
import Candidate from "../model/candidateModel.js"
import Voter from "../model/voterModel.js"
import { generateToken } from "../config/generateToken.js"
import { encrypt, comparePassword } from "../config/password.js"
import { verifyOTP, deleteOTP } from "./otpController.js"
import { sendVerificationOTPEmail } from "./emailController.js"
import WalletConnectProvider from "@walletconnect/web3-provider"
import { create } from "ipfs-http-client"
import { ethers } from "ethers"

const ipfs = create({ url: "https://ipfs.infura.io:5001/api/v0" })

const storeUserData = async (userId, sensitiveData) => {
    const cid = await storeSensitiveDataInIPFS(sensitiveData)

    const user = await Person.findById(userId)

    if (!user) console.error("User not found")

    await user.save()

    console.log("User data stored in IPFS with CID:", cid)
}

const storeSensitiveDataInIPFS = async (data) => {
    try {
        const { cid } = await ipfs.add(JSON.stringify(data))
        return cid.toString()
    } catch (error) {
        console.error("Error storing data in IPFS:", error.message)
    }
}

export const login = async (req, res) => {
    try {
        const { mobileNumber, password } = req.body

        const user = await Person.findOne({ mobileNumber })
        if (!user) {
            return res.status(400).json({ message: "Invalid mobile number" })
        }

        const isMatch = comparePassword(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" })
        }
        const token = generateToken(user._id)
        res.json({
            message: "Login successful",
            isAdmin: user.isAdmin,
            name: user.name,
            age: user.age,
            isValidated: user.isValidated,
            phone: user.phone,
            email: user.email,
            aadhar: user.aadhar,
            token,
        })
    } catch (error) {
        res.status(500).json({ message: "login user controller error" })
    }
}

export const registerUsers = async (req, res) => {
    try {
        const { name, phone, aadhar, email, age } = req.body

        // Check for missing fields
        if (!name || !phone || !aadhar || !age) {
            return res.status(400).json({ message: "Missing required fields" })
        }

        // Create a new Person instance
        const user = new Person({
            name: name,
            phone: phone,
            aadhar: aadhar,
            email: email, // Include email if provided
            age: age,
        })

        // Save user to database
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        console.error("Error registering user:", error.message) // Log the specific error message
        res.status(500).json({
            message: `Register user controller error: ${error.message}`,
        }) // Send detailed error to response
    }
}

export const register = async (req, res) => {
    try {
        const { aadhar, email } = req.body

        const user = await Person.findOne({ aadhar })

        if (!user) {
            return res.status(400).json({ message: "Invalid aadhar number" })
        }
        if (user.age < 18) {
            return res
                .status(400)
                .json({ message: "You are not eligible to vote" })
        }
        if (!user.isVerified) {
            await sendVerificationOTPEmail(email)

            return res
                .status(200)
                .json({ message: "Verification code sent to your email" })
        }
    } catch (error) {
        res.status(500).json({ message: "register user controller error" })
    }
}

export const validateUser = async (req, res) => {
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

        res.status(200).json({
            success: true,
            name: savedUser.name,
            email: savedUser.email,
            phone: savedUser.phone,
            age: savedUser.age,
            token: generateToken(savedUser._id),
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Server Error in validate user",
        })
    }
}

export const addCandidate = async (req, res) => {
    try {
        const { partyName, motto, image, personId } = req.body
        // const user = await Candidate.find({ person: personId })
        // if(user){
        //     return res.status(400).json({ message: "User already registered as a candidate" })
        // }
        const candidate = new Candidate({
            partyName,
            motto,
            image,
            person: personId,
        })

        storeUserData(personId, req.body?._id)
        await candidate.save()
        res.status(201).json(candidate)
    } catch (error) {
        res.status(500).json({ message: "add candidate controller error" })
    }
}

export const removeCandidate = async (req, res) => {
    try {
        const { id } = req.params
        await Candidate.findByIdAndDelete(id)
        res.status(200).json({ message: "Candidate removed" })
    } catch (error) {
        res.status(500).json({ message: "remove candidate controller error" })
    }
}

export const vote = async (req, res) => {
    try {
        const { voterId, candidateId } = req.body

        const provider = new WalletConnectProvider({
            infuraId: process.env.INFURA_URL,
        })

        await provider.enable()

        const etherProviders = new ethers.BrowserProvider(provider)
        const signer = await etherProviders.getSigner()

        const contractAddress = process.env.CONTRACT_ADDRESS
        const contractABI = process.env.CONTRACT_ABI
        const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        )

        const tx = await contract.vote(candidateId)
        await tx.wait()

        const transactionHash = tx.hash

        const voter = new Voter({
            voter: voterId,
            candidate: candidateId,
            transactionHash,
        })
        await voter.save()
        res.status(201).json(voter)
    } catch (error) {
        res.status(500).json({ message: "vote controller error" })
    }
}
