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
import { isEmpty, signUrl } from '@/lib/utils'
import { setKey } from '@/util/api'
import RenderObject from './render-object'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
    name: z.string().min(3, {
        message: 'Request name must be at least 3 characters.',
    }),
    recipient: z.string().min(3, {
        message: 'Recipient name must be at least 3 characters.',
    }),
    // optional
    date: z.date().optional(),
    file: z.any().optional(),
    notes: z.string().optional(),
})

function UploadForm() {
    const [result, setResult] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    const setDemoData = async () => {
        form.setValue('name', 'Balance verification request')
        form.setValue(
            'notes',
            'This is to validate proof of funds to have an offer considered'
        )
        form.setValue('recipient', 'John Doe')
        form.setValue('date', new Date())
        form.setValue('file', null)
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        try {
            // upload contract
            // TODO
            const address = '0x123'

            setResult({
                success: true,
                message:
                    'Request created successfully. Share the below url with the intended recipient.',
                url: signUrl(address),
            })
            // scroll to result
            window.scrollTo(0, document.body.scrollHeight)

            form.setValue('name', '')
        } catch (err: any) {
            console.error(err)
            setResult({
                error: err?.message || 'Unknown error',
            })
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
                            name="name"
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
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Notes"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Additional notes for the request.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* add files */}

                        <FormField
                            control={form.control}
                            name="recipient"
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
                            name="file"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Add attachment</FormLabel>
                                    <FormControl>
                                        <Input type="file" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Optional attachment for the receipient
                                        to download / access.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="date"
                            disabled={true}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Date created (tentative){' '}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Date"
                                            disabled={true}
                                            value={new Date().toLocaleDateString()}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Date of the request creation. This is
                                        determined on successful creation and
                                        shown on the request page.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button disabled={loading} type="submit">
                            Create request
                        </Button>
                    </form>

                    {/* error */}
                    {/* {form.formState.errors && (
        <div className="pt-8">
          <div className="text-xl text-bold">Errors:</div>
          <div>{JSON.stringify(form.formState.errors)}</div>
        </div>
      )} */}

                    {/* formState */}
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
        </div>
    )
}

export default UploadForm
