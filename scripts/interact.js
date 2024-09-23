async function main() {
  const [deployer] = await ethers.getSigners();

  // Use the actual contract address here
  const gojaCoin = await ethers.getContractAt("GojaCoin", "0x942C02529C233707d32EA8721215970ef3b35557");

  // Replace with the actual recipient Ethereum address
  const tx = await gojaCoin.transfer("0xa01630bC27BCD7b918314fe76d69E795259A15C0", ethers.utils.parseUnits("100", 18));
  console.log("Transaction hash:", tx.hash);

  await tx.wait();
  console.log("Transfer complete");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
