import { ethers } from "ethers";
import { SALE_CONTRACT_ADDRESS, SALE_CONTRACT_ABI } from "../config";
import { customHttpProvider } from "./RPCConnector";

export const contract = new ethers.Contract(
    SALE_CONTRACT_ADDRESS,
    SALE_CONTRACT_ABI,
    customHttpProvider
);
