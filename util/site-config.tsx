export const config = {
    title: 'FundPoint',
    description: 'Blockchain-mediated proof of fund requests with one click',
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
            title: 'Upload',
            description:
                'Upload a balance verification request. The verification link will be available at a shareable url',
        },
        {
            title: 'Sign',
            description:
                'Sign a request to verify their balance. Neither the exact balance nor addresses will be exposed to the requester.',
        },
        {
            title: 'Verify',
            description: 'Verify a signed request to confirm the balance.',
        },
    ],
}
