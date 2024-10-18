const mongoose = require("mongoose")

const candidateSchema = new mongoose.Schema({
    partyName: { type: String, required: true },
    motto: { type: String, required: true },
    image: { type: String, required: true },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    },
})

const Candidate = mongoose.model("Candidate", candidateSchema)
module.exports = Candidate
