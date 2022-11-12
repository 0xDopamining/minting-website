import { ethers } from "ethers";
import { CONTRACT_ABI, SALE_CONTRACT } from "../config";
import { customHttpProvider } from "../ethereum/RPCConnector";

export const getCurrentPrice = async (): Promise<Number> => {
  let contract = new ethers.Contract(
    SALE_CONTRACT,
    CONTRACT_ABI,
    customHttpProvider
  );

  const currentPrice: Number = (await contract.price()) / 10 ** 18;
  return currentPrice;
};

export const getSoldEggs = async (): Promise<Number> => {
  let contract = new ethers.Contract(
    SALE_CONTRACT,
    CONTRACT_ABI,
    customHttpProvider
  );

  const remainingEggs: Number = await contract.currentSupplyCount();
  return remainingEggs;
};

export const getTotalEggs = async (): Promise<Number> => {
  let contract = new ethers.Contract(
    SALE_CONTRACT,
    CONTRACT_ABI,
    customHttpProvider
  );

  const totalEggs: Number = await contract.supplyCap();
  return totalEggs;
};
