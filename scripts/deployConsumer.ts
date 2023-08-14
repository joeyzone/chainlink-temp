import { ethers } from "hardhat";

async function main() {
  const dataConsumer = await ethers.deployContract("DataConsumerV3");

  await dataConsumer.waitForDeployment();

  console.log(`DataConsumerV3 deployed to ${dataConsumer.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
