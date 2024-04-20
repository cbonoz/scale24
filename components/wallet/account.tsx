import { abbreviate } from '@/lib/utils'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

    const shortAddress = abbreviate(address || '', 6)

    return (
        <div>
            {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
            {shortAddress && (
                <span>
                    {ensName ? `${ensName} (${shortAddress})` : shortAddress}
                    &nbsp;(
                    <button
                        className="text-blue-500 underline"
                        onClick={() => disconnect()}
                    >
                        Disconnect
                    </button>
                    )
                </span>
            )}
        </div>
    )
}
