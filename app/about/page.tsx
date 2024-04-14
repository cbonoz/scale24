'use client'

import BasicCard from '@/components/basic-card'
import { Button } from '@/components/ui/button'
import { createSchema } from '@/lib/ethsign'
import { config } from '@/util/site-config'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const About = () => {
    const [loading, setLoading] = useState(false)
    const getSchemaId = async () => {
        setLoading(true)
        try {
            const res = await createSchema()
            console.log('createSchema', res)
            alert('Schema ID: ' + res)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <BasicCard
                title="About FundPoint"
                description="Learn more about FundPoint and how it works."
                className="min-w-[400px] p-4"
            >
                {config.about.map((section, index) => (
                    <div key={index} className="mt-4">
                        <h3 className="text-lg font-bold">{section.title}</h3>
                        <p>{section.description}</p>
                    </div>
                ))}

                <Button onClick={getSchemaId} disabled={loading}>
                    {loading && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Get Schema ID
                </Button>
            </BasicCard>
        </div>
    )
}
export default About
