import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
    partyName: { type: String, required: true },
    motto: { type: String, required: true },
    image: { type: String, required: true },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
        unique: true,
    },
})

const Candidate = mongoose.model("Candidate", candidateSchema)
export default Candidate
