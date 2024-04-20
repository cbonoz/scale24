'use client'

import BasicCard from '@/components/basic-card'
import { Button } from '@/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function FundRequest() {
    const [loading, setLoading] = useState(false)
    const [signLoading, setSignLoading] = useState(false)
    const [data, setData] = useState<any>(null)
    const [result, setResult] = useState<any>(null)
    const [error, setError] = useState<any>(null)

    const router = useRouter()

    const { requestId } = router.query

    async function fetchData() {}

    async function signRequest() {}

    if (loading) {
        return <div>Loading...</div>
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <BasicCard
                title="Fund Request"
                description="Find and verify a fund request using your wallet."
                className="min-w-[400px] p-4"
            >
                <div className="text-2xl text-bold">{requestId}</div>

                {!result && (
                    <div>
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
