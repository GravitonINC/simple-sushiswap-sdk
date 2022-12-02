import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { SushiswapError } from '../errors/sushiswap-error';

const SushiSwapFactoryMainnet = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac';
const SushiSwapFactoryTestnets = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';
/**
 * Sushiswap factory address
 */
export class FactoryAddress {
  public static MAINNET = () => SushiSwapFactoryMainnet;

  public static ROPSTEN = () => SushiSwapFactoryTestnets;

  public static RINKEBY = () => SushiSwapFactoryTestnets;

  public static GORLI = () => SushiSwapFactoryTestnets;

  public static KOVAN = () => SushiSwapFactoryTestnets;

  /**
   * Get SushiSwap FactoryAddress by chain id
   * @param chainId The chain id
   */
  public static factoryAddress(chainId: ChainId | number) {
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
