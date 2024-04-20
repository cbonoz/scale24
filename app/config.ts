import { createConfig, http, cookieStorage, createStorage } from 'wagmi'
import { arbitrumSepolia, gnosisChiado, mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
    chains: [mainnet, sepolia, arbitrumSepolia, gnosisChiado],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [arbitrumSepolia.id]: http(),
        [gnosisChiado.id]: http(),
    },
})
