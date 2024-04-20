'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import {
    getExplorerUrl,
    getPlaceholderDescription,
    isEmpty,
    signUrl,
} from '@/lib/utils'
import RenderObject from './render-object'
import { Textarea } from './ui/textarea'
import { ReloadIcon } from '@radix-ui/react-icons'
import { uploadFile } from '@/lib/stor'
import { useAccount, useChainId, useChains } from 'wagmi'
import { deployContract } from '@/lib/contract/deploy'
import { config } from '@/app/config'
import { useEthersSigner } from '@/lib/get-signer'
import { Chain } from 'viem'
import { network } from 'hardhat'

const formSchema = z.object({
    title: z.string().min(3, {
        message: 'Request name must be at least 3 characters.',
    }),
    recipientName: z.string().min(3, {
        message: 'Recipient name must be at least 3 characters.',
    }),
    recipientAddress: z.string().min(3, {
        message: 'Recipient address must be at least 3 characters.',
    }),
    balance: z.number().optional(),
    file: z.any().optional(),
    description: z.string().optional(),
})

function UploadForm() {
    const [result, setResult] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const { address } = useAccount()
    const chainId = useChainId()
    const chains = useChains()
    const currentChain: Chain | undefined = (chains || []).find(
        (c) => c.id === chainId
    )
    const signer = useEthersSigner({ chainId })

    const setDemoData = async () => {
        form.setValue('title', 'Balance verification request')
        form.setValue('description', getPlaceholderDescription())
        form.setValue('recipientName', 'John Doe')
        form.setValue(
            'recipientAddress',
            address || '0x1234567890123456789012345678901234567890'
        )
        // balance
        form.setValue('balance', 5000)
        form.setValue('file', null)
    }

    const clearForm = () => {
        form.setValue('title', '')
        form.setValue('description', '')
        form.setValue('recipientName', '')
        form.setValue('balance', undefined)
        form.setValue('recipientAddress', '')
        form.setValue('file', null)
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        setError(null)
        try {
            const res: any = {}

            // upload file
            const file = values.file
            let cid = ''
            if (file) {
                cid = await uploadFile(file)
                console.log('fileAddress', cid)
            }
            // upload contract

            const {
                title,
                description,
                balance,
                recipientName,
                recipientAddress,
            } = values

            const contractAddress = await deployContract(
                signer,
                title,
                description || '',
                balance,
                recipientName,
                recipientAddress,
                cid,
                currentChain?.name || ''
            )
            res['contractAddress'] = contractAddress
            res['contractUrl'] = getExplorerUrl(contractAddress, currentChain)
            res['cid'] = cid
            res['message'] =
                'Request created successfully. Share the below url with the intended recipient.'
            res['url'] = signUrl(contractAddress)
            setResult(res)
            // scroll to result
            window.scrollTo(0, document.body.scrollHeight)
            clearForm()
        } catch (err: any) {
            console.error(err)
            setError(err?.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    const hasResult = !isEmpty(result)

    return (
        <div>
            {!hasResult && (
                <Form {...form}>
                    <a
                        href="#"
                        className="hover:underline text-blue-500 cursor-pointer pointer"
                        onClick={setDemoData}
                    >
                        Set demo data
                    </a>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Enter fund request name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="$5000 balance request verification"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Name of the request.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Notes */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter request description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Additional description for the request.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* add files */}

                        <FormField
                            control={form.control}
                            name="recipientName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Recipient name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Recipient name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Name of the recipient.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="recipientAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Recipient address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Recipient address"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Known address used for authentication
                                        and ownership attestation. Recipient
                                        should provide the desired address to
                                        you.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="balance"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Required balance{' '}
                                        {currentChain?.name && (
                                            <span>({currentChain?.name})</span>
                                        )}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Required balance"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Required balance. Uses native chain
                                        currency i.e.{' '}
                                        {currentChain?.nativeCurrency?.name ||
                                            'ETH'}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="file"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Add attachment</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            // {...field}
                                            onChange={(e) => {
                                                form.setValue(
                                                    'file',
                                                    e.target.files
                                                )
                                            }}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Optional attachment for the receipient
                                        to download / access.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button disabled={loading || !address} type="submit">
                            {loading && (
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            {!address
                                ? 'Connect wallet to continue'
                                : 'Create request'}
                        </Button>
                    </form>
                </Form>
            )}
            {hasResult && (
                <div className="pt-8">
                    <Button onClick={() => setResult(null)}>
                        {' '}
                        ← Create another request
                    </Button>
                    <div className="mt-4">
                        <RenderObject title="Result" obj={result} />
                    </div>
                </div>
            )}
            {error && (
                <div className="mt-2 text-red-500 max-w-3xl">{error}</div>
            )}
        </div>
    )
}

export default UploadForm
