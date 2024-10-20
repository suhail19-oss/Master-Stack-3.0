import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
import Person from "../model/personModel.js"

export const userAuth = async function (req, res, next) {
    const token = req.header("Authorization").replace("Bearer ", "")

    if (!token) {
        return res
            .status(401)
            .json({ message: "No token provided, authorization denied" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).json({ message: "Invalid token" })
    }
}

export const isAdmin = async function (req, res, next) {
    console.log(req.user);
    const user = await Person.findById(req.user.id)
    
    
    if (user.isAdmin) {
        next()
    } else {
        return res
            .status(403)
            .json({ message: "You are not authorized to access this route" })
    }
}
