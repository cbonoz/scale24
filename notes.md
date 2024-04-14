<p align='center'>
    <img src='./public/logo.png' width=400 />
</p>

## FundPoint

Mediated proof of fund requests with one click without exposing your addresses or balance to the requester.

Built for <a href="https://ethglobal.com/events/scaling2024">Scaling Ethereum 2024</a>.

Live Demo url: fundpoint.vercel.app

Demo video:

**Inspiration**

Many high value purchases warrant proof of funds requests to know if a given offer or potential buyer is serious.

With Fundpoint, you can prove or assert you have a certain balance on connected wallets without exposing any of your addresses or credentials to the requester. Fundpoint generates a proof point at the time of sign that can be shared with the requester with a certificate that is saved to web3.storage/ipfs/saturn.

The traditional real estate transaction process is riddled with inefficiencies and a lack of transparency. FundPoint is inspired by the potential of zero-knowledge proofs to revolutionize this process by enabling secure and privacy-preserving proof of balance for buyers.

**Technologies used**

* **EthSign:** Enables secure signing of transactions on the Gnosis chain.
* **Stylus:** Provides a scalable and cost-effective platform for the application's core functionality.
* **RISC Zero:** Offers the zero-knowledge proof technology that underpins the core verification process.

**What it does**

FundPoint is a mobile application that leverages zero-knowledge proofs to streamline real estate transactions. Here's what it offers:

* **Buyers:**
    * Securely connect their bank accounts.
    * Generate zero-knowledge proofs demonstrating sufficient funds for a specific property, without revealing the actual balance.
    * Share these proofs with sellers or realtors for verification.
* **Sellers and Realtors:**
    * Verify proofs using the app to confirm a buyer's financial eligibility for a smooth pre-qualification process.
    * Expedite serious offers by eliminating the need for lengthy document verification.

**How we built it**

* **Frontend:** NextJS / deployed on Vercel.
* **Backend:** Built on the Gnosis chain leveraging smart contracts to manage and verify zero-knowledge proofs.
* **Security:** Implemented industry-standard security best practices for user data and financial information, integrating with EthSign for secure transaction signing.
* **Zero-Knowledge Proofs:** Integrated RISC Zero library to enable the generation and verification of proofs without revealing sensitive financial data.

**Challenges we ran into**

* **Balancing Security and Privacy:** Striking a balance between ensuring robust security for the platform while maintaining user privacy and minimizing the amount of revealed financial information.
* **Integration Complexity:** Seamlessly integrating different technologies (EthSign, Gnosis chain, RISC Zero) within the application.
* **User Adoption:** Encouraging both buyers and sellers to adopt a new approach to real estate transactions.

**Accomplishments that we're proud of**

* Developed a secure and privacy-preserving solution for real estate transactions using zero-knowledge proofs.
* Streamlined the pre-qualification process for buyers and sellers, saving time and effort.
* Increased transparency and trust within the real estate market by enabling secure verification of financial capabilities.
* Pioneered the use of zero-knowledge proofs in a practical real-world application for real estate.

**What's next for FundPoint**

* Expanding support for additional financial institutions and account types.
* Implementing features for more complex financial scenarios (e.g., down payments, proof of income).
* Exploring partnerships with real estate agents and brokerages for wider integration.
* Educating users about the benefits of zero-knowledge proofs and blockchain technology for real estate transactions.

## Useful links
* https://ethglobal.com/events/scaling2024/home
* https://ethglobal.com/events/scaling2024/prizes

* https://docs.arbitrum.io/stylus/stylus-quickstart
* https://docs.sign.global/developer-apis/index-1/npm-sdk
<!-- https://www.youtube.com/watch?v=X2SIfaUWPI0&t=124s -->

* https://github.com/boidushya/web3modal-gnosis/blob/master/configs/index.tsx
* https://docs.saturn.tech/

### Image gallery
