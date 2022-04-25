require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "700a9f1728a34af3ad68ddd49652a621";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://palm-testnet.infura.io/v3/${projectId}`,
      account: [privateKey],
    },
    mainnet: {
      url: `https://palm-mainnet.infura.io/v3/${projectId}`,
      account: [privateKey],
    },
  },
  solidity: "0.8.4",
};
