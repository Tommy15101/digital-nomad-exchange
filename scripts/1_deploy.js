const { ethers } = require("hardhat");

async function main() {
    console.log(`Preparing Deployment...\n`)
    // Fetch contract to deploy
    const Token = await ethers.getContractFactory('Token');
    const Exchange = await ethers.getContractFactory('Exchange')
    // Fetch accounts
    const accounts = await ethers.getSigners()
    console.log(`Accounts Fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)

    // Deploy contracts
    const digitalNomad = await Token.deploy('Digital Nomad Token', 'DNT', '1000000');
    await digitalNomad.deployed()
    console.log(`Digital Nomad Token deployed to: ${digitalNomad.address}`);

    const phuket = await Token.deploy('Phuket Token', 'PKT', '1000000');
    await phuket.deployed()
    console.log(`Phuket Token deployed to: ${phuket.address}`);

    const bali = await Token.deploy('Bali Token', 'BLI', '1000000');
    await bali.deployed()
    console.log(`Bali Token deployed to: ${bali.address}`);

    const exchange = await Exchange.deploy(accounts[1].address, 10);
    await exchange.deployed()
    console.log(`Exchange deployed to: ${exchange.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
});
