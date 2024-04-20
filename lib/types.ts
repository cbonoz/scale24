export interface RequestData {
    recipientName: string
    recipientAddress: string
    balance: number
    name: string
    description: string
    files: string[]
}

export interface SchemaItem {
    name: string
    type: string
}

export interface SchemaEntry {
    name: string
    request: string
    timestamp: string
    signature: string
}
