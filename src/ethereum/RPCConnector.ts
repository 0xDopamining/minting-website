import { HTTP_NODE_URL } from "../config";
import { ethers } from "ethers";

export const customHttpProvider = new ethers.providers.JsonRpcProvider(
  HTTP_NODE_URL
);
