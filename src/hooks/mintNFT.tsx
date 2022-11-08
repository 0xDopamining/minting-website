import { getWallet } from "./InitializeWallet";
import { ethers } from "ethers";

import { SALE_CONTRACT, CONTRACT_ABI } from "../config";
import { customHttpProvider } from "../ethereum/RPCConnector";

export const mintNFT = async () => {
  const wallet: ethers.Wallet = getWallet();

  let contract = new ethers.Contract(
    SALE_CONTRACT,
    CONTRACT_ABI,
    customHttpProvider
  );
  let contractWithSigner = contract.connect(wallet);
  /*let tx = await contractWithSigner.payablefunction(parameters, {
    value: ethers.utils.parseEther("0.1"),
  });
  console.log(tx);

  await tx.wait();*/
};
