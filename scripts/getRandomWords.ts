import { ethers } from "hardhat";
import "dotenv/config";
import { VRFv2Consumer } from "../typechain-types";

async function main() {
  const vrfConsumer: VRFv2Consumer = await ethers.getContractAt(
    "VRFv2Consumer",
    process.env.SEPOLIA_VRFCONSUMER_ADDR || ""
  );
  await vrfConsumer.requestRandomWords();
}

async function test() {
  const vrfConsumer: VRFv2Consumer = await ethers.getContractAt(
    "VRFv2Consumer",
    process.env.SEPOLIA_VRFCONSUMER_ADDR || ""
  );
  console.log("random words is : ", await vrfConsumer.s_randomWords(0));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
test().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
