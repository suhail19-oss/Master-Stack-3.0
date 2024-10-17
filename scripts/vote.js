const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const [voter] = await ethers.getSigners();

    const votingContractAddress = process.env.CONTRACT_ADDRESS; // Ensure correct address here
    const Voting = await ethers.getContractFactory("Voting");
    const voting = Voting.attach(votingContractAddress);

    console.log("Checking if election is active...");

    // Check if election is active
    let electionActive;
    try {
        electionActive = await voting.isElectionState();  
    } catch (error) {
        console.error("Error checking election status:", error);
        process.exit(1);
    }

    console.log("Election Active Status:", electionActive);

    // If election is not active, start it
    if (!electionActive) {
        console.log("Election is not active. Starting election...");
        try {
            const txStart = await voting.startElection();
            await txStart.wait();
            electionActive = await voting.electionActive();  // Re-check the status
            console.log("Election started successfully.");
        } catch (error) {
            console.error("Error starting the election:", error);
            process.exit(1);
        }
    }

    console.log("Casting vote...");

    const candidateId = 0; // Choose candidate ID (index)
    let totalCandidates;
    try {
        totalCandidates = await voting.totalCandidates();
        console.log("Total Candidates:", totalCandidates.toString());
    } catch (error) {
        console.error("Error fetching total candidates:", error);
        process.exit(1);
    }

    if (candidateId < totalCandidates) {
        try {
            const tx = await voting.vote(candidateId);
            await tx.wait();
            console.log("Vote casted for candidate ID:", candidateId);

            // Fetch and log the vote count for the candidate
            const voteCount = await voting.getVoteCount(candidateId);
            console.log(`Vote count for candidate ID ${candidateId}:`, voteCount.toString());
        } catch (error) {
            console.error("Error casting vote:", error);
            process.exit(1);
        }
    } else {
        console.error("Invalid candidate ID.");
        process.exit(1);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
