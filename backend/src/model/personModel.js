import mongoose from "mongoose"
import bcrypt from "bcrypt"

const personSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true, unique: true },
        aadhar: { type: String, required: true, unique: true },
        email: { type: String, unique: true },
        password: { type: String, required: true },
        age: { type: Number, required: true },
        isVerified: { type: Boolean, default: false },
        isAdmin: { type: Boolean, default: false },

        voterTransactionForYear: { type: Array, default: [] },
    },
    { timestamps: true }
)

userSchema.pre("save", async function () {
    if (!this.password) {
        const randomPassword = Math.random().toString(36).slice(-8)
        this.password = await bcrypt.hash(randomPassword, 10)
    }
})

const Person = mongoose.model("Person", personSchema)
module.exports = Person
