import express from "express"
import {
    login,
    registerUsers,
    register,
    validateUser,
    addCandidate,
    removeCandidate,
    vote,
} from "../controllers/userController"
import { userAuth, isAdmin } from "../middleware/authMiddleware"

const voterRouter = express.Router()

voterRouter.post("/registerUsers", userAuth, isAdmin, registerUsers)
voterRouter.post("/register", userAuth, register)
voterRouter.post("/login", login)
voterRouter.post("/validate", userAuth, validateUser)
voterRouter.post("/addCandidate", userAuth, isAdmin, addCandidate)
voterRouter.delete("/removeCandidate/:id", userAuth, isAdmin, removeCandidate)
voterRouter.post("/vote", userAuth, vote)

module.exports = voterRouter
