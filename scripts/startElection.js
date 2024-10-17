const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();

  const votingContractAddress = process.env.CONTRACT_ADDRESS; // Update this
  const Voting = await ethers.getContractFactory("Voting");
  const voting = Voting.attach(votingContractAddress);

  console.log("Starting election...");

  const tx = await voting.startElection();
  await tx.wait();

  console.log("Election started!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
