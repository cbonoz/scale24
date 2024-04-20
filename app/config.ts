import { createConfig, http, cookieStorage, createStorage } from 'wagmi'
import { arbitrumSepolia, gnosisChiado, mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
    chains: [gnosisChiado, mainnet],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [gnosisChiado.id]: http(),
        [mainnet.id]: http(),
        // [arbitrumSepolia.id]: http(),
    },
})
