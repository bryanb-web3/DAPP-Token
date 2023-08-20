const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token', () => {

	it('has correct name', async () => {
		// Fetch Token from Blockchain
		const Token = await ethers.getContractFactory('Token')
		let token = await Token.deploy()
		// Read tokem name
		const name = await token.name()
		// Check that name is correct
		expect(name).to.equal("Dapp University")
	})

it('has correct symbol', async () => {
		// Fetch Token from Blockchain
		const Token = await ethers.getContractFactory('Token')
		let token = await Token.deploy()
		// Read tokem name
		const symbol = await token.symbol()
		// Check that name is correct
		expect(symbol).to.equal("DAPP")
	})

})
