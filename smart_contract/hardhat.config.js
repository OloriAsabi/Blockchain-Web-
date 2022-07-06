//https://eth-mainnet.g.alchemy.com/v2/Yl1hs7COhqkJmoF5qQAR2y76rtMP0r1R

require("@nomiclabs/hardhat-ethers")


module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/XUU-z0GeMZyFR1IWITojt0EGnN133dzL',
      accounts: ['94cf46aee9de5c0408f4a85e2f125c922828a293964209ff6c65e714a97d5c9b'],
    },
  },
};