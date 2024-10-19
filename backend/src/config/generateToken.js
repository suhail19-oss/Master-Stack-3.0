import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const jwt_secret = process.env.JWT_SECRET

export const generateToken = (id) => {
    return jwt.sign({ id }, jwt_secret, {
        expiresIn: '3h'
    })
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, jwt_secret)
        return decoded
    } catch (err) {
        console.log(err)
    }
}
