'use client'

import { useChainId, useSwitchChain } from 'wagmi'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export function SwitchNetwork() {
    const { chains, switchChain } = useSwitchChain()
    const currentChainId = useChainId()

    const chainId = currentChainId + ''

    return (
        <Select
            onValueChange={(cid: string) =>
                switchChain({ chainId: parseInt(cid) })
            }
            value={chainId}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select network" />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    {chains.map((chain) => (
                        <SelectItem value={chain.id as any}>
                            {chain.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
