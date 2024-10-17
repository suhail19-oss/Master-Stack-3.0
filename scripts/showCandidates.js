const { ethers } = require("hardhat")
require("dotenv").config()

async function showCandidates() {
    const [deployer] = await ethers.getSigners()

    const votingContractAddress = process.env.CONTRACT_ADDRESS
    const Voting = await ethers.getContractFactory("Voting")
    const voting = Voting.attach(votingContractAddress)

    console.log("Fetching candidates from the voting contract...")

    const candidates = await voting.getCandidates()
    console.log("Candidates:", candidates)
}

// Call the function to show candidates
showCandidates()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
