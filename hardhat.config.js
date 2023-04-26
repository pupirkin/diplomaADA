require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: 'https://frequent-hidden-yard.matic-testnet.discover.quiknode.pro/fbcdbccad0b364c84a4d8bb8ee8f1880ea71bc61/',
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};