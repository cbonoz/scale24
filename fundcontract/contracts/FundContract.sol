// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract FundContract {
    // Struct to represent a data entry
    struct Metadata {
        address owner;
        string network;
        uint createdAt;
        string name;
        string description;
        uint balance;
        string recipientName;
        address recipientAddress;
        string cid; // optional cid pointer to attachment/s
        uint validatedAt;
        string attestationId;
    }

    // owner
    address private owner;
    // metadata
    Metadata private metadata;

    // Event to log balance verification
    event FundVerified(string attestationId);

    constructor(
        string memory _name,
        string memory _description,
        string memory _network,
        uint _balance,
        string memory _recipientName,
        address _recipientAddress,
        string memory _cid
    ) {
        // Constructor to initialize the contract
        owner = msg.sender;
        metadata = Metadata(
            msg.sender,
            _network,
            block.timestamp,
            _name,
            _description,
            _balance,
            _recipientName,
            _recipientAddress,
            _cid,
            0,
            ""
        );
    }

    // get owner
    function getOwner() public view returns (address) {
        return owner;
    }

    function validate(string memory _attestationId) public returns (Metadata memory) {
        // get balance of sender
        uint balance = address(msg.sender).balance;
        // only the recipient address can validate
        require(
            msg.sender == metadata.recipientAddress,
            "Only the intended recipient can validate their balance"
        );
        // require at least balance of the metadata
        require(balance >= metadata.balance, "Balance is less than expected");
        // only validate once
        require(metadata.validatedAt == 0, "Balance already validated");
        // set validatedAt timestamp
        metadata.validatedAt = block.timestamp;
        metadata.attestationId = _attestationId;
        // emit event
        emit FundVerified(_attestationId);
        return metadata;
    }

    // get metadata
    function getMetadata() public view returns (Metadata memory) {
        return metadata;
    }
}
