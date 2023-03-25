require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const COINMARKETCAP_API_KEY =
    process.env.COINMARKETCAP_API_KEY || "8d9d22b4-a546-43d9-83d0-2eb7e5bea9f6"
const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL ||
    "https://eth-goerli.g.alchemy.com/v2/ia34n8RQpW8qXvAda8zZEym8UsI-LTg7"
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL
const PRIVATE_KEY =
    process.env.PRIVATE_KEY || "a434d0a2847f88767fcf6401c447ee4b22ff7a69203d7d9fcb979eeaaa363d20"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "KS4W59JCNVS8SGXJRVF5DJFC89MTWS4VAN"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            forking: {
                url: MAINNET_RPC_URL,
            },
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 6,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
        localhost: {
            chainId: 31337,
            blockConfirmations: 1,
        },
    },
    //solidity: "0.8.4"
    solidity: {
        compilers: [
            { version: "0.8.4" },
            { version: "0.4.19" },
            { version: "0.6.12" },
            { version: "0.6.0" },
        ],
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 200000, //200seconds
    },
    etherscan: {
        apiKey: {
            goerli: process.env.ETHERSCAN_API_KEY,
        },
    },
}
