require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

 module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/OvIEeT07RK8Dbmnnm9ICRGQss8S9L3fC",
      accounts: [process.env.ACCOUNT]
    },
  },
};
