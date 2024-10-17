require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {  // Or use another testnet like Sepolia, or local if testing locally.
      url: process.env.INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Load private key
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [`0x${process.env.PRIVATE_KEY}`],  // For local blockchain
    },
  },
};
