import mongoose from "mongoose"
import bcrypt from "bcrypt"

const personSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true, unique: true },
        aadhar: { type: String, required: true, unique: true },
        email: { type: String, unique: true, default: null },
        password: { type: String},
        defaultPassword: { type: String },
        age: { type: Number, required: true },
        isVerified: { type: Boolean, default: false },
        isAdmin: { type: Boolean, default: false },

        voterTransactionForYear: { type: Array, default: [] },
    },
    { timestamps: true }
)

personSchema.pre("save", async function (next) {

    if (!this.password) {
        const randomPassword = Math.random().toString(36).slice(-8) // Generate a random 8-character password
        this.defaultPassword = randomPassword 
        this.password = await bcrypt.hash(randomPassword, 10) // Hash the random password
    }
    next() // Proceed to the next middleware or save
})

const Person = mongoose.model("Person", personSchema)
export default Person
