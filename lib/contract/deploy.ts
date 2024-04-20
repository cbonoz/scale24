import { ethers } from 'ethers'
import { FUND_CONTRACT } from './metadata'
import { formatDate } from '../utils'

export async function deployContract(signer, uploadName, description, cid) {
    // Deploy contract with ethers
    const factory = new ethers.ContractFactory(
        FUND_CONTRACT.abi,
        FUND_CONTRACT.bytecode,
        signer
    )

    const contract: any = await factory.deploy(uploadName, description, cid)
    // log
    console.log('Deploying contract...', uploadName, description, cid)

    await contract.deployed()
    console.log('deployed contract...', contract.address)
    return contract
}

export const getMetadata = async (signer: any, address: string) => {
    const contract = new ethers.Contract(address, FUND_CONTRACT.abi, signer)
    const result = await contract.getMetadata.call()
    console.log('result', result)
    return {
        name: result[0],
        description: result[1],
        versionCount: result[2].toNumber(),
        createdAt: formatDate(result[3].toNumber() * 1000),
        owner: result[4],
    }
}

export const validate = async (signer: any, address: string) => {
    const contract = new ethers.Contract(address, FUND_CONTRACT.abi, signer)
    const result = await contract.validate()
    console.log('result', result)
    return {
        creator: result[0],
        dataHash: result[1],
        timestamp: formatDate(result[2].toNumber() * 1000),
        version: result[3].toNumber(),
        cid: result[4],
        notes: result[5],
    }
}
