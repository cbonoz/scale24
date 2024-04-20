import { ethers } from 'ethers'
import { FUND_CONTRACT } from './metadata'
import { formatDate } from '../utils'

export async function deployContract(
    signer: any,
    title: string,
    description: string,
    balance: any,
    recipientName: string,
    recipientAddress: string,
    cid: string,
    network: string
) {
    // Deploy contract with ethers
    const factory = new ethers.ContractFactory(
        FUND_CONTRACT.abi,
        FUND_CONTRACT.bytecode,
        signer
    )

    let contract: any = await factory.deploy(
        title,
        description,
        balance,
        recipientName,
        recipientAddress,
        cid,
        network
    )
    // log
    console.log(
        'Deploying contract...',
        title,
        description,
        balance,
        recipientName,
        recipientAddress,
        cid,
        network
    )

    contract = await contract.waitForDeployment()
    console.log('deployed contract...', contract.target)
    return contract.target
}

export const getMetadata = async (signer: any, address: string) => {
    const contract = new ethers.Contract(address, FUND_CONTRACT.abi, signer)
    const result = await (contract.getMetadata as any).call()
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
