'use client'

import { config } from '@/app/config'
import BasicCard from '@/components/basic-card'
import RenderObject from '@/components/render-object'
import { Button } from '@/components/ui/button'
import { FUND_CONTRACT } from '@/lib/contract/metadata'
import { createAttestation } from '@/lib/ethsign'
import { useEthersSigner } from '@/lib/get-signer'
import { ContractMetadata, SchemaEntry } from '@/lib/types'
import { getExplorerUrl, getIpfsUrl, transformMetadata } from '@/lib/utils'
import { ReloadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { Address, Chain, createPublicClient, http } from 'viem'
import { readContract } from 'viem/actions'

import { useAccount, useChainId, useChains, useWriteContract } from 'wagmi'

interface Params {
    requestId: Address
}

export default function FundRequest({ params }: { params: Params }) {
    const [loading, setLoading] = useState(true)
    const [signLoading, setSignLoading] = useState(false)
    const [data, setData] = useState<ContractMetadata | undefined>()
    const [result, setResult] = useState<any>(null)
    const [error, setError] = useState<any>(null)
    const ref = useRef(null)
    const { address } = useAccount()

    const router = useRouter()

    const { requestId } = params

    const chainId = useChainId()
    const chains = useChains()
    const currentChain: Chain | undefined = (chains || []).find(
        (c) => c.id === chainId
    )

    const signer = useEthersSigner({ chainId })

    async function fetchData() {
        setLoading(true)
        try {
            const publicClient = createPublicClient({
                chain: currentChain,
                transport: http(),
            })
            let contractData: ContractMetadata = transformMetadata(
                (await publicClient.readContract({
                    abi: FUND_CONTRACT.abi,
                    address: requestId,
                    functionName: 'getMetadata',
                })) as ContractMetadata
            )
            // convert balance and validatedAt to number from bigint
            console.log('contractData', contractData)
            setData(contractData)
        } catch (error) {
            console.log('error reading contract', error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    // https://wagmi.sh/react/guides/read-from-contract
    // const { data: balance } = useReadContract({
    //     ...wagmiContractConfig,
    //     functionName: 'balanceOf',
    //     args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
    //   })

    const { writeContract } = useWriteContract()

    async function signRequest() {
        if (!data) {
            alert('No data to sign - try another url')
            return
        }

        const signatureData = ref?.current?.toDataURL() || ''
        console.log('signatureData', signatureData)

        setSignLoading(true)
        const d: ContractMetadata = data
        try {
            const schemaEntry: SchemaEntry = {
                name: d.recipientName,
                request: d.name,
                timestamp: Date.now().toString(),
                signature: '',
                // signatureData,
            }

            const attestation = await createAttestation(signer, schemaEntry)
            const res = writeContract({
                abi: FUND_CONTRACT.abi,
                address: requestId,
                functionName: 'validate',
                args: [attestation.attestationId],
            })

            console.log('signRequest validate', res, attestation)
            const metadata = transformMetadata(res as any)

            setResult(metadata)
        } catch (error) {
            console.log('error signing request', error)
            setError(error)
        }
        setSignLoading(false)
    }

    useEffect(() => {
        if (address) {
            fetchData()
        }
    }, [address])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!address) {
        return <div>Please connect your wallet</div>
    }

    const authorized = address === data?.recipientAddress
    const showSignRequest = authorized && !result
    const showResult = Boolean(authorized && data?.validatedAt)

    const getTitle = () => {
        if (showResult) {
            return (
                <span className="text-green-500">
                    Request has been validated!
                </span>
            )
        }
        if (showSignRequest) {
            return data?.name || 'Fund Request'
        }
        return 'Fund Request'
    }

    return (
        // center align
        <div className="flex flex-col items-center justify-center mt-8">
            <BasicCard
                title={getTitle()}
                // description="Find and verify a fund request using your wallet."
                className="max-w-[1000px] p-4"
            >
                <div className="text-sm text-bold">
                    <Link
                        className="text-blue-500 hover:underline"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={getExplorerUrl(requestId, currentChain) || ''}
                    >
                        View on {data?.network || 'explorer'}
                    </Link>
                </div>

                {!authorized && (
                    <div>
                        <p>Not authorized to sign this request</p>
                        <p>
                            You are connected with address: {address}.<br />
                            Request is for address: {data?.recipientAddress}
                        </p>
                    </div>
                )}

                {showResult && (
                    <div>
                        <div className="text-green-500">
                            This request has been validated!
                        </div>

                        <div className="mt-4">
                            <RenderObject title="Data" obj={data} />
                        </div>
                    </div>
                )}

                {showSignRequest && (
                    <div>
                        <div className="mt-4">
                            <div className="my-2">
                                <div className="font-bold text-2xl mb-4 text-black-500">
                                    Hey {data.recipientName},
                                </div>
                                <div className="mb-2">
                                    you have a new proof of funds request!
                                </div>
                                <hr />
                                <div className="my-4">{data.description}</div>
                                {data.createdAt && (
                                    <div>
                                        This was requested at:{' '}
                                        {new Date(
                                            data.createdAt
                                        ).toLocaleString()}
                                    </div>
                                )}
                                {data.cid && (
                                    <div className="my-2">
                                        <Link
                                            className="text-blue-500 hover:underline"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href={getIpfsUrl(data.cid)}
                                        >
                                            View attachment
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <RenderObject
                                title="Details"
                                obj={data}
                                keys={['balance', 'owner']}
                            />
                        </div>

                        <div className="my-4 border w-[325px] p-1">
                            <div className="text-med font-bold">Sign here</div>
                            <SignatureCanvas ref={ref} />
                        </div>

                        <Button
                            onClick={() => {
                                signRequest()
                            }}
                        >
                            {signLoading && (
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Verify request
                        </Button>
                    </div>
                )}

                {result && (
                    <div className="mt-4">
                        <h3 className="text-lg font-bold">Result</h3>
                        <p>{result}</p>
                    </div>
                )}

                {error && <div className="text-red-500">{error.message}</div>}
            </BasicCard>
        </div>
    )
}
