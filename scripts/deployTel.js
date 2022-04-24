const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log("Deploying contracts with account: ", deployer.address);

    const teleFactory = await hre.ethers.getContractFactory("TelephoneAttack");
    const teleContract = await teleFactory.deploy();
    await teleContract.deployed();
  
    console.log("TelephoneAttack address: ", teleContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();