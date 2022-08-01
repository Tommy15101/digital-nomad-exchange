const { ethers } = require('hardhat');
const { expect } = require('chai');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether');
}

describe('Token', () => {
    let token;

    beforeEach(async () => {
        const Token = await ethers.getContractFactory('Token');
        token = await Token.deploy('Digital Nomad Token', 'DNT', '1000000');
    })

    describe('Deployment', () => {
        const name = 'Digital Nomad Token';
        const symbol = 'DNT';
        const decimals = '18';
        const totalSupply = tokens('1000000');

        it('Has correct name: Digital Nomad Token', async () => {
            expect(await token.name()).to.equal(name);
        })
     
        it('Has correct symbol: DNT', async () => {
            expect(await token.symbol()).to.equal(symbol);
        })
     
        it('Has correct decimals: 18', async () => {
            expect(await token.decimals()).to.equal(decimals);
        })
     
        it('Has correct totalSupply: 1 Million', async () => {
            expect(await token.totalSupply()).to.equal(totalSupply);
        })
    })
})