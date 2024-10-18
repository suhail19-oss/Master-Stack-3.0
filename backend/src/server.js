import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js"
import voterRouter from "./routes/voterRoutes.js"

dotenv.config()
const app = express()
app.use(cors())
connectDB()
app.use(express.json())

app.use("/api", voterRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`)
})
