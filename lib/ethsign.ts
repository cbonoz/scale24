import { config } from '@/util/site-config'
import {
    SignProtocolClient,
    SpMode,
    EvmChains,
    OffChainSignType,
    IndexService,
} from '@ethsign/sp-sdk'
import { privateKeyToAccount } from 'viem/accounts'

import { arbitrumSepolia } from 'viem/chains'

// https://docs.sign.global/developer-apis/index-1/npm-sdk#off-chain-arweave-mode
const privateKey = '0xabc' // optional

const SCHEMA_ID: string = process.env.NEXT_PUBLIC_SCHEMA_ID + ""

const getClient = () => {
    const client = new SignProtocolClient(SpMode.OffChain, {
        signType: OffChainSignType.EvmEip712,
        rpcUrl: 'https://stylus-testnet.arbitrum.io/rpc',
        // account: privateKeyToAccount(privateKey), // optional
    })
    return client
}

export const createSchema = async () => {
    //create schema
    const client = getClient()
    const schemaInfo = await client.createSchema({
        name: config.title,
        data: [{ name: 'name', type: 'string' }],
    })
    return schemaInfo
}

export const createAttestation = async (data: any, indexingValue: any) => {
    const client = getClient()
    //create attestation
    const attestationInfo = await client.createAttestation({
        //schemaInfo.schemaId or other schemaId
        schemaId: SCHEMA_ID,
        data,
        indexingValue,
        // data: { name: 'a' },
        // indexingValue: 'xxx',
    })
    return attestationInfo
}

//revoke attestation
// const attestationId = 'xxx'
// const revokeAttestationRes = await client.revokeAttestation(attestationId, {
//     reason: 'test',
// })

async function getSchemaListFromIndexService() {
    const indexService = new IndexService('testnet')
    const res = await indexService.querySchemaList({ page: 1 })
}

async function getSchemaFromIndexService() {
    const indexService = new IndexService('testnet')
    const res = await indexService.querySchema('onchain_evm_80001_0x1')
}

async function getAttestationListFromIndexService() {
    const indexService = new IndexService('testnet')
    const res = await indexService.queryAttestationList({ page: 1 })
}

async function getAttestationFromIndexService() {
    const indexService = new IndexService('testnet')
    const res = await indexService.queryAttestation('onchain_evm_80001_0x1')
}
