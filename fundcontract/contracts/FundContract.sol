// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract FundContract {
    // Struct to represent a data entry
    struct Metadata {
        address creator;
        string name;
        string description;
        uint balance;
        string recipientName;
        address recipientAddress;
        string cid; // optional cid pointer to attachment/s
        string notes; // optional notes
        uint validatedAt;
    }

    // owner
    address private owner;
    // metadata
    Metadata private metadata;

    uint public createdAt = block.timestamp;

    // Event to log balance verification
    event FundVerified(uint balance);

    constructor(
        string memory _name,
        string memory _description,
        uint _balance,
        string memory _recipientName,
        address _recipientAddress,
        string memory _cid,
        string memory _notes
    ) {
        // Constructor to initialize the contract
        owner = msg.sender;
        metadata = Metadata(
            msg.sender,
            _name,
            _description,
            _balance,
            _recipientName,
            _recipientAddress,
            _cid,
            _notes,
            0
        );
    }

    // get owner
    function getOwner() public view returns (address) {
        return owner;
    }

    // Function to retrieve data by its unique URL (dataHash)
    function validate(uint balance ) public returns (Metadata memory) {
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
        // emit event
        emit FundVerified(balance);
        return metadata;
    }

    // get metadata
    function getMetadata() public view returns (Metadata memory) {
        return metadata;
    }
}
