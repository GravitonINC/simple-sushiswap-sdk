import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { SushiswapError } from '../errors/sushiswap-error';

const SushiSwapRouterMainnet = '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F';
const SushiSwapRouterTestnets = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506';
/**
 * Sushiswap router address
 */
export class RouterAddress {
  public static MAINNET = () => SushiSwapRouterMainnet;

  public static ROPSTEN = () => SushiSwapRouterTestnets;

  public static RINKEBY = () => SushiSwapRouterTestnets;

  public static GORLI = () => SushiSwapRouterTestnets;

  public static KOVAN = () => SushiSwapRouterTestnets;

  /**
   * Get SushiSwap RouterAddress by chain id
   * @param chainId The chain id
   */
  public static routerAddress(chainId: ChainId | number) {
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
