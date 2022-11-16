import { DpmWallet } from "./InitializeWallet";
import { contract } from "../ethereum/saleContract";

export const mintNFT = async (): Promise<boolean> => {
  const contractWithSigner = contract.connect(DpmWallet.wallet);
  console.info(DpmWallet.wallet.address)
  try {
    let tx = await contractWithSigner.mintNFT({ value: await contract.price() });
    await tx.wait();
    console.log(tx);

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
