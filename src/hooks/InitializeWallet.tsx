import { BytesLike, isBytesLike } from "ethers/lib/utils";
import { ethers } from "ethers";

import { customHttpProvider } from "../ethereum/RPCConnector";

let privateKey: BytesLike;
let initialized = false;
let wallet: ethers.Wallet;

export const initializeWallet = (_privateKey: BytesLike) => {
  privateKey = _privateKey;
  if (isBytesLike(privateKey)) {
    wallet = new ethers.Wallet(privateKey, customHttpProvider);
    initialized = true;
  }
};

export const isInitialized = (): Boolean => {
  return initialized;
};

export const getPrivateKey = () => {
  return privateKey;
};

export const getWallet = () => {
  return wallet;
};
