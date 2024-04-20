import { config } from '@/util/site-config'
import {
    SignProtocolClient,
    SpMode,
    EvmChains,
    OffChainSignType,
    IndexService,
} from '@ethsign/sp-sdk'
import { privateKeyToAccount } from 'viem/accounts'

import { arbitrumSepolia, gnosisChiado } from 'viem/chains'
import { SchemaEntry } from './types'

// https://docs.sign.global/developer-apis/index-1/npm-sdk#off-chain-arweave-mode
// const privateKey = '0xabc' // optional

const SCHEMA_ID: string = process.env.NEXT_PUBLIC_SCHEMA_ID + ''

const schemaItem = (name: string): { name: any; type: any } => ({
    name,
    type: 'string',
})

const getClient = (signer?: any) => {
    const client = new SignProtocolClient(SpMode.OffChain, {
        signType: OffChainSignType.EvmEip712,
        rpcUrl: gnosisChiado.rpcUrls.default.http[0],
        account: signer || undefined,
    })
    return client
}

export const getAttestation = async (attestationId: string) => {
    const client = getClient()
    const attestationInfo = await client.getAttestation(attestationId)
    return attestationInfo
}

export const createSchema = async () => {
    //create schema
    const client = getClient()
    const data = [
        schemaItem('name'),
        schemaItem('request'),
        schemaItem('timestamp'),
        schemaItem('signature'),
    ]
    const title = config.title
    const schemaInfo = await client.createSchema({
        name: title,
        data,
    })
    return { schemaId: schemaInfo.schemaId, data: JSON.stringify(data), title }
}
// https://docs.sign.global/developer-apis/index-1/npm-sdk#off-chain-arweave-mode
export const createAttestation = async (signer: any, data: SchemaEntry) => {
    const client = getClient(signer)
    //create attestation
    const indexingValue = `${data.request} ${data.timestamp}`
    console.log('create sign request', indexingValue, data, signer)
    const attestationInfo = await client.createAttestation({
        schemaId: SCHEMA_ID,
        data,
        indexingValue,
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
