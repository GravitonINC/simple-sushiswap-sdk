import { JsonFragment } from '@ethersproject/abi';
import { ChainId } from '../enums/chain-id';
import { FactoryAddress, PairAddress, RouterAddress } from './sushiswap';

export class ContractContext {
  /**
   * Update the context to a different chainId - default to MAINNET
   */
   public static setChainId(chainId: ChainId | number) {
    this.routerAddress = RouterAddress.routerAddress(chainId);
    this.factoryAddress = FactoryAddress.factoryAddress(chainId);
    this.pairAddress = PairAddress.pairAddress(chainId);
   }

  /**
   * The sushiswap router address
   */
  public static routerAddress = RouterAddress.MAINNET();

  /**
   * The sushiswap factory address
   */
  public static factoryAddress = FactoryAddress.MAINNET();

  /**
   * The sushiswap pair address
   */
  public static pairAddress = PairAddress.MAINNET();

  /**
   * sushiswap v2 router
   */
  public static routerAbi: JsonFragment[] = require('../ABI/sushiswap-router-v2.json');

  /**
   * sushiswap v2 factory
   */
  public static factoryAbi: JsonFragment[] = require('../ABI/sushiswap-factory-v2.json');

  /**
   * sushiswap v2 pair
   */
  public static pairAbi: JsonFragment[] = require('../ABI/sushiswap-pair-v2.json');

  /**
   * ERC20 abi
   */
  public static erc20Abi: JsonFragment[] = require('../ABI/erc-20-abi.json');
}
