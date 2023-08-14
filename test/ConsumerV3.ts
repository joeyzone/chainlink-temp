import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { DataConsumerV3 } from "../typechain-types";

describe("Chainlink ConsumerV3", () => {
  let address;
  let dataConsumerV3: DataConsumerV3;

  async function deployConsumer() {
    dataConsumerV3 = await ethers.getContractAt(
      "DataConsumerV3",
      process.env.SEPOLIA_DATAFEED_ADDR || "0x"
    );
  }
  beforeEach(async () => {
    await deployConsumer();
  });
  it("price greater than 0", async () => {
    const price = await dataConsumerV3.getLatestData();
    expect(price).to.be.greaterThan(0);
  });
});
