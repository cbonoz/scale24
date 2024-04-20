import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const isEmpty = (obj: any) => !obj || obj.length === 0

export const abbreviate = (s: string, chars?: number) =>
    s ? `${s.substr(0, chars || 6)}**` : ''

export const formatDate = (d: Date | string | number, onlyDate?: boolean) => {
    if (!(d instanceof Date)) {
        d = d ? new Date(d) : new Date()
    }

    if (onlyDate) {
        return d.toLocaleDateString()
    }
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
}

export const isValidEmail = (email: string) => {
    return email && email.indexOf('@') !== -1
}

export const getNameFromUser = (user: any) => {
    return `${user.firstName} ${user.lastName}`
}

export const signUrl = (address: string) =>
    `${window.location.origin}/sign/${address}`

export const termsUrl = () => `${window.location.origin}/terms`

export const convertCamelToHuman = (str: string) => {
    // Check if likely datetime timestamp ms
    if (str.length === 13) {
        return new Date(str).toLocaleDateString()
    }

    return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (s) {
            return s.toUpperCase()
        })
        .replace(/_/g, ' ')
}

export function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const getIpfsUrl = (cid: string) => {
    return `https://gateway.lighthouse.storage/ipfs/${cid}`
}
