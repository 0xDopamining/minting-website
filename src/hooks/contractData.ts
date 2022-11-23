import { ethers } from "ethers";
import { contract as saleContract } from "../ethereum/saleContract";

export const getFormattedPrice = async (): Promise<number> => {
  const rawPrice: bigint = BigInt(await saleContract.price())
  const formattedPrice = ethers.utils.formatEther(rawPrice.toString());
  return Number(formattedPrice);
};

export const getSoldEggs = async (): Promise<bigint> => {
  const remainingEggs = await saleContract.currentSupplyCount();
  return remainingEggs;
};

export const getTotalEggs = async (): Promise<bigint> => {
  const totalEggs = await saleContract.supplyCap();
  return totalEggs;
};
