import { createConfig, http, cookieStorage, createStorage } from 'wagmi'
import {
    arbitrumSepolia,
    gnosisChiado,
    mainnet,
    morphSepolia,
    sepolia,
} from 'wagmi/chains'

export const config = createConfig({
    chains: [gnosisChiado, mainnet, morphSepolia],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [gnosisChiado.id]: http(),
        [mainnet.id]: http(),
        [morphSepolia.id]: http(),
        // [arbitrumSepolia.id]: http(),
    },
})
