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

    return (
        <Select
            onValueChange={(chainId) => switchChain({ chainId })}
            value={currentChainId + ''}
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
