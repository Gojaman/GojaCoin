const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  // Replace with your GojaCoin contract address deployed on Sepolia
  const gojaCoin = await ethers.getContractAt("GojaCoin", "0x942C02529C233707d32EA8721215970ef3b35557");

  // Correct recipients, replacing the invalid address with a valid one
  const recipients = [
    "0x9a7c90d52ce1f90ea1afc72f4b2331f7e7d2f72b",
    "0x4b0897b0513fd2ffed22469b1e2c2b5f8e9e27de",
    "0x5b38Da6a701c568545dCfcB03FcB875f56beddC4"   // Replaced with a valid address
  ];

  const amount = ethers.utils.parseUnits("100", 18);  // 100 GojaCoins

  // Loop through recipients and transfer tokens
  for (const recipient of recipients) {
    const tx = await gojaCoin.transfer(recipient, amount);
    console.log(`Airdropped 100 GojaCoins to: ${recipient}, Tx Hash: ${tx.hash}`);
    await tx.wait();  // Wait for the transaction to be mined
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
