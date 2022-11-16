import { BytesLike } from "ethers/lib/utils";
import { Wallet } from "ethers/lib/ethers";

import { customHttpProvider } from "../ethereum/RPCConnector";

export class DpmWallet {
  private static _privateKey: BytesLike;
  private static _wallet: Wallet;

  public static get privateKey(): BytesLike {
    return this._privateKey;
  }

  public static set privateKey(privateKey: BytesLike) {
    this._privateKey = privateKey;
    this._wallet = new Wallet(privateKey, customHttpProvider);
  }

  public static get initialized(): boolean {
    return this._wallet !== undefined;
  }

  public static get wallet(): Wallet {
    return this._wallet;
  }
}