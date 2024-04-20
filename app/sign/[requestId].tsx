'use client'

import BasicCard from '@/components/basic-card'
import { Button } from '@/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'

import { useAccount } from 'wagmi'

export default function FundRequest() {
    const [loading, setLoading] = useState(false)
    const [signLoading, setSignLoading] = useState(false)
    const [data, setData] = useState<any>(null)
    const [result, setResult] = useState<any>(null)
    const [error, setError] = useState<any>(null)
    const ref = useRef(null)
    const { address } = useAccount()

    const router = useRouter()

    const { requestId } = router.query

    async function fetchData() {}

    // https://wagmi.sh/react/guides/read-from-contract
    // const { data: balance } = useReadContract({
    //     ...wagmiContractConfig,
    //     functionName: 'balanceOf',
    //     args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
    //   })

    async function signRequest() {
        const signatureData = ref?.current?.toDataURL() || ''
        console.log('signatureData', signatureData)

        try {
            setSignLoading(true)
            // const res = await signRequest(requestId, signatureData)
            // console.log('signRequest', res)
            setResult('Signed successfully')
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

    return (
        <div>
            <BasicCard
                title="Fund Request"
                // description="Find and verify a fund request using your wallet."
                className="min-w-[400px] p-4"
            >
                <div className="text-2xl text-bold">{requestId}</div>

                {!authorized && (
                    <div>
                        <p>Not authorized to sign this request</p>
                        <p>
                            You are connected with address: {address}.<br />
                            Request is for address: {data?.recipientAddress}
                        </p>
                    </div>
                )}

                {showSignRequest && (
                    <div>
                        <h3 className="text-lg font-bold">Data</h3>
                        <div className="mt-4">
                            {JSON.stringify(data, null, 2)}
                        </div>

                        <SignatureCanvas ref={ref} />

                        <Button
                            onClick={() => {
                                console.log('Sign request')
                                signRequest()
                            }}
                        >
                            {signLoading && (
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Sign request
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
