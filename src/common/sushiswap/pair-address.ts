import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { SushiswapError } from '../errors/sushiswap-error';

const SushiSwapPairMainnet = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac';
const SushiSwapPairTestnets = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';
/**
 * Sushiswap pair address
 */
export class PairAddress {
  public static MAINNET = () => SushiSwapPairMainnet;

  public static ROPSTEN = () => SushiSwapPairTestnets;

  public static RINKEBY = () => SushiSwapPairTestnets;

  public static GORLI = () => SushiSwapPairTestnets;

  public static KOVAN = () => SushiSwapPairTestnets;

  /**
   * Get SushiSwap PairAddress by chain id
   * @param chainId The chain id
   */
  public static pairAddress(chainId: ChainId | number) {
    switch (chainId) {
      case ChainId.MAINNET:
        return this.MAINNET();
      case ChainId.ROPSTEN:
        return this.ROPSTEN();
      case ChainId.RINKEBY:
        return this.RINKEBY();
      case ChainId.GÖRLI:
        return this.GORLI();
      case ChainId.KOVAN:
        return this.KOVAN();
      default:
        throw new SushiswapError(
          `${chainId} is not allowed`,
          ErrorCodes.canNotFindChainId
        );
    }
  }
}
