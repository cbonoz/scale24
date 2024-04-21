<p align='center'>
    <img src='./public/logo.png' width=400 />
</p>

## FundPoint

Mediated proof of fund requests with one click without exposing your addresses or balance to the requester.

Built for <a href="https://ethglobal.com/events/scaling2024">Scaling Ethereum 2024</a>.

Live Demo url: https://fundpoint.vercel.app (Stylus testnet)

Demo video:

### Inspiration

Many high value purchases warrant proof of funds requests to know if a given offer or potential buyer is serious.

With Fundpoint, you can prove or assert you have a certain balance on connected wallets without exposing bank statements or keys to the requester. Fundpoint generates a proof point at the time of attestation / verification that can be shared with the requester with a signature saved via Sign Protocol.

Fundpoint offers mediated proof of fund requests managed by smart contracts f create attestations of record on Sign Protocol backed by smart contracts

### How it works

* **Buyers:**
    * Securely connect their wallets, showing ownership over particular accounts.
    * Generate smart contract transactions and sign protocol attestations demonstrating sufficient funds for a specific transaction, without revealing additional or personal details.
    * Share these proofs with sellers or realtors for verification.
* **Sellers and Realtors:**
    * Verify proofs using the app to confirm a buyer's financial eligibility for a smooth pre-qualification process.
    * Expedite serious offers by eliminating the need for lengthy document verification.


When a balance request is created, a smart contract gets deployed marking the information around the balance request. The address of the smart contract serves as part of a unique url which can be shared with the recipient or verifier - only the intended recipient can validate their balance and create an attestation to be shared with the seller.

When the verification is complete, a blockchain event is also emitted with information about the validation. This event can be listened to on other networks or blockchain platforms for triggering other potential workflows.


### Technologies used

**Sign Protocol**: Utilized for generating and verifying signatures to ensure the authenticity and integrity of attestations without revealing sensitive information. When balance verifications are completed, a hosted attestation is created alongside the verification process.

**Filecoin**: Used for secure file storage for additional material related to the fund request. When the other party visits the authenticated balance verification link, he or she can access the uploaded material related to the purpose of the upload. This is also secured with saturn and uses lighthouse web3 sdk underneath for both upload and download based on the cid. Created cids are saved to the smart contracts.

***Blockchains***

FundPoint was tested on a few different blockchains with deployed contracts that support fund verification in each native currency.

**Arbitrum**: Leveraged for its scalability and cost-effectiveness in deploying smart contracts and executing transactions, providing an efficient platform for managing fund verification processes.

**Gnosis**: Utilized for its decentralized prediction market capabilities, potentially enhancing risk assessment and prediction of fund availability for involved parties, leading to more informed decision-making.

**Morph**: Employed for interoperability and cross-chain transactions, enabling seamless connectivity between different blockchain networks to enhance the accessibility and usability of Fundpoint across diverse ecosystems.

Eth Mainnet is also supported though carries additional/higher fees.



### Links to an example completed contract requests

Arbitrum: https://stylus-testnet-explorer.arbitrum.io/address/0x9189c7722C0B815cd3752d559aD10980E20e59B4/transactions#address-tabs


### Challenges we ran into
Integration Complexity was the most challenging: Overcoming the technical challenges of integrating multiple blockchain protocols and APIs seamlessly into FundPoint's app flows required additional testing and debugging.


### Accomplishments that we're proud of**
* User-Centric Design: Designing FundPoint with a focus on user experience and security has resulted in a platform that offers seamless and secure fund verification processes, enhancing trust and confidence among buyers, sellers, and realtors.
* Blockchain Interoperability: Achieving interoperability between different blockchain networks and protocols showcases our commitment to fostering a connected and accessible decentralized ecosystem.

### What's next for FundPoint**

1. Enhanced Smart Contract Functionality: Implementing advanced smart contract functionalities to automate and streamline fund verification processes further, reducing manual intervention and increasing efficiency.

2. Expanded Blockchain Support: Adding support for additional blockchain networks and protocols to broaden FundPoint's reach and accessibility, catering to users across different blockchain ecosystems.

3. Integration of Advanced Security Features: Integrating advanced security features such as zero-knowledge proofs and multi-factor authentication to enhance the security posture of FundPoint and protect user data and funds effectively.



### Useful links
* https://ethglobal.com/events/scaling2024/home
* https://ethglobal.com/events/scaling2024/prizes

* https://docs.arbitrum.io/stylus/stylus-quickstart
* https://docs.sign.global/developer-apis/index-1/npm-sdk
<!-- https://www.youtube.com/watch?v=X2SIfaUWPI0&t=124s -->

* https://github.com/boidushya/web3modal-gnosis/blob/master/configs/index.tsx
* https://docs.saturn.tech/

### Image gallery
