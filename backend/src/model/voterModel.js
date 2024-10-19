import mongoose from "mongoose";

const voterSchema = new mongoose.Schema({
    voter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true,
    },
    transactionHash: { type: String, required: true },
})

const Voter = mongoose.model("Voter", voterSchema)
export default Voter
