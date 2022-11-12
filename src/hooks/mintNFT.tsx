import { getWallet } from "./InitializeWallet";
import { ethers } from "ethers";

import { SALE_CONTRACT, CONTRACT_ABI } from "../config";
import { customHttpProvider } from "../ethereum/RPCConnector";

export const mintNFT = async (): Promise<Boolean> => {
  const wallet: ethers.Wallet = getWallet();

  let contract = new ethers.Contract(
    SALE_CONTRACT,
    CONTRACT_ABI,
    customHttpProvider
  );
  let contractWithSigner = contract.connect(wallet);
  let tx = await contractWithSigner.mintNFT({
    value: ethers.utils.parseEther("1"),
  });
  console.log(tx);

  await tx.wait();

  return true;
};
