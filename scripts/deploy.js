async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);

  const GojaCoin = await ethers.getContractFactory("GojaCoin");

  // Pass the name, symbol, and initial supply to the constructor
  const gojaCoin = await GojaCoin.deploy("GojaCoin", "GOJA", 1000000);  // Adjust initial supply as needed

  console.log("GojaCoin deployed to:", gojaCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
