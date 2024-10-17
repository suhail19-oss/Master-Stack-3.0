const { ethers } = require("hardhat");
require("dotenv").config(); 

async function main() {
  const [deployer] = await ethers.getSigners();

  const votingContractAddress = process.env.CONTRACT_ADDRESS;
  const Voting = await ethers.getContractFactory("Voting");
  const voting = Voting.attach(votingContractAddress);

  console.log("Adding candidate to the voting contract...");

  const tx = await voting.addCandidate("Alice", "Party A");
  await tx.wait();

  console.log("Candidate added to the voting contract");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
