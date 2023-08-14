import { ethers } from "hardhat";

async function main() {
  const subId = 4502;
  const vrfConsumer = await ethers.deployContract("VRFv2Consumer", [subId]);

  await vrfConsumer.waitForDeployment();

  console.log(`VRFConsumerTest deployed to ${vrfConsumer.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
