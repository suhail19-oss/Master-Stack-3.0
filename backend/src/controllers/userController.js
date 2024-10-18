import Person from "../model/personModel"
import Candidate from "../model/candidateModel"
import Voter from "../model/voterModel"
import { generateToken } from "../config/generateToken"
import { encrypt, comparePassword } from "../config/password"
import { verifyOTP, deleteOTP } from "./otpController"
import { sendVerificationOTPEmail } from "./emailController"
import WalletConnectProvider from "@walletconnect/web3-provider"
import { create } from "ipfs-http-client"
import { ethers } from "ethers"

const ipfs = create({ url: "https://ipfs.infura.io:5001/api/v0" })

const storeUserData = async (data) => {
    const { userId, sensitiveData } = req.body
    const cid = await storeSensitiveDataInIPFS(sensitiveData)

    const user = await Person.findById(userId)
    if (!user) return res.status(404).json({ message: "User not found" })

    user.voterTransactionForYear.push(cid)
    await user.save()

    res.json({ message: "Data stored in IPFS", ipfsHash: cid })
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
        const { name, phone, aadhar, age } = req.body
        const user = new Person({ name, phone, aadhar, age })
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: "register user controller error" })
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

const addCandidate = async (req, res) => {
    try {
        const { partyName, motto, image, personId } = req.body
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

const removeCandidate = async (req, res) => {
    try {
        const { id } = req.params
        await Candidate.findByIdAndDelete(id)
        res.status(200).json({ message: "Candidate removed" })
    } catch (error) {
        res.status(500).json({ message: "remove candidate controller error" })
    }
}

const vote = async (req, res) => {
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

const storeSensitiveDataInIPFS = async (data) => {
    const { cid } = await ipfs.add(JSON.stringify(data))
    return cid.toString()
}

module.exports = {
    login,
    registerUsers,
    register,
    validateUser,
    addCandidate,
    removeCandidate,
    vote,
    storeUserData,
}
