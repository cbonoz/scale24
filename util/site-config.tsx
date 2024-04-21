export const config = {
    title: 'FundPoint',
    description: 'Blockchain-mediated proof of fund requests with one click',
    isLocal: process.env.NEXT_PUBLIC_ENV === 'development',
    about: [
        {
            title: 'What is FundPoint?',
            description:
                'FundPoint is a tool that allows you to verify your balance without exposing your addresses or balance to the requester.',
        },
        {
            title: 'How does it work?',
            description:
                'You upload a request for verification, the request is signed by the verifier, and the verifier verifies the request.',
        },
        {
            title: 'Why should I use FundPoint?',
            description:
                'FundPoint allows you to verify your balance without exposing your addresses or balance to the requester.',
        },
        {
            title: 'Disclaimer',
            description:
                'Note FundPoint is currently a proof of concept prototype and as provided as-is without any guarantees. Use at your own risk.',
        },
    ],
    steps: [
        {
            title: 'Create',
            description:
                'Create a balance verification request. A verification link will be generated that you can send to the other party.',
        },
        {
            title: 'Share',
            description:
                'Recipient accesses the verification link and connects with a known address. The recipient proves ownership and additionally signs with attestation that the funds belong to them.',
        },
        {
            title: 'Verify',
            description:
                'Requester can review the completed attestation and verification event on an underlying smart contract.',
        },
    ],
}
