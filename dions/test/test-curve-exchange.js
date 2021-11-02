const BN = require("bn.js")
const { sendEther, pow } = require("./util")
const { DAI, DAI_WHALE, USDC, USDC_WHALE, USDT, USDT_WHALE } = require("")

const IERC20 = artifacts.require("IERC20")
const TestCurveExchange = artifacts.require("TestCurveExchange")

contract("TestCurveExchange", (accounts) => {
  const USDC ="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const USDT ="0x5ED54cD2247877DaAE6f6ed380fEAbDf279f4d11";
  const USDC_WHALE ="0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";

  const WHALE = USDC_WHALE
  const TOKEN_IN = USDC
  const TOKEN_IN_INDEX = 1
  const TOKEN_OUT = USDT
  const TOKEN_OUT_INDEX = 2
  const DECIMALS = 6
  const TOKEN_IN_AMOUNT = pow(10, DECIMALS).mul(new BN(1000000))

  let testContract
  let tokenIn
  let tokenOut
  beforeEach(async () => {
    tokenIn = await IERC20.at(TOKEN_IN)
    tokenOut = await IERC20.at(TOKEN_OUT)
    testContract = await TestCurveExchange.new()

    await sendEther(web3, accounts[0], WHALE, 1)

    const bal = await tokenIn.balanceOf(WHALE)
    assert(bal.gte(TOKEN_IN_AMOUNT), "balance < TOKEN_IN_AMOUNT")

    await tokenIn.transfer(testContract.address, TOKEN_IN_AMOUNT, {
      from: WHALE,
    })
  })

  it("exchange", async () => {
    const snapshot = async () => {
      return {
        tokenOut: await tokenOut.balanceOf(testContract.address),
      }
    }

    // const before = await snapshot()
    await testContract.swap(TOKEN_IN_INDEX, TOKEN_OUT_INDEX)
    const after = await snapshot()

    console.log(`Token out: ${after.tokenOut}`)
  })
})
