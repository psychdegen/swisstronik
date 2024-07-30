require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x87b8dd08d1bcd7f01ac980462e18a94e04069a9f06e0097be54f5298bab8bd7c"], //Your private key starting with "0x"
    },
  },
};
