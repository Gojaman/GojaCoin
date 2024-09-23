const { expect } = require("chai");

describe("GojaCoin", function () {
  it("Should deploy the token and test transfer functionality", async function () {
    const GojaCoin = await ethers.getContractFactory("GojaCoin");
    const gojaCoin = await GojaCoin.deploy(1000); // Mint 1000 tokens
    await gojaCoin.deployed();

    const [owner, addr1] = await ethers.getSigners();
    await gojaCoin.transfer(addr1.address, 100);
    expect(await gojaCoin.balanceOf(addr1.address)).to.equal(100);
  });
});
