/* eslint-disable camelcase */
import { JsonRpcSigner } from '@ethersproject/providers'
import { SwapTokenV2 } from '../../../typechain/SwapTokenV2.sol/SwapTokenV2'
import { deployContract } from '../contracts'

export const fixtureIMP = async (signer: JsonRpcSigner) => {
  const testSwapToken: SwapTokenV2 = await deployContract('SwapTokenV2', signer)

  return {
    testSwapToken,
  }
}
