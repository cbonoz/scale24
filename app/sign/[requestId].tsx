import BasicCard from '@/components/basic-card'
import { useRouter } from 'next/router'

export default function FundRequest() {
    const router = useRouter()

    const { requestId } = router.query

    return (
        <div>
            <BasicCard
                title="Fund Request"
                description="Find and verify a fund request using your wallet."
                className="min-w-[400px] p-4"
            >
                <div className="text-2xl text-bold">{requestId}</div>
                <form>
                    <input type="text" />
                    <button>Sign</button>
                </form>
            </BasicCard>
        </div>
    )
}
