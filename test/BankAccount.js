const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("BankAccount", function () {
  async function deployBankAccount() {
    const [addr0, addr1, addr2, addr3] = await ethers.getSigners();

    const BankAccount = await ethers.getContractFactory("BankAccount");
    const backAccount = await BankAccount.deploy(unlockTime, { value: lockedAmount });

    return { backAccount, addr0, addr1, addr2, addr3 };
  }

  describe("Deployment", () => {
    it("Should deploy without error", async () => {
      await loadFixture(deployBankAccount);
    });
  })
});
