export const FUND_CONTRACT = {
    _format: 'hh-sol-artifact-1',
    contractName: 'FundContract',
    sourceName: 'contracts/FundContract.sol',
    abi: [
        {
            inputs: [
                {
                    internalType: 'string',
                    name: '_name',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: '_description',
                    type: 'string',
                },
                {
                    internalType: 'uint256',
                    name: '_balance',
                    type: 'uint256',
                },
                {
                    internalType: 'string',
                    name: '_recipientName',
                    type: 'string',
                },
                {
                    internalType: 'address',
                    name: '_recipientAddress',
                    type: 'address',
                },
                {
                    internalType: 'string',
                    name: '_cid',
                    type: 'string',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'string',
                    name: 'attestationId',
                    type: 'string',
                },
            ],
            name: 'FundVerified',
            type: 'event',
        },
        {
            inputs: [],
            name: 'createdAt',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getMetadata',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'owner',
                            type: 'address',
                        },
                        {
                            internalType: 'string',
                            name: 'name',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'description',
                            type: 'string',
                        },
                        {
                            internalType: 'uint256',
                            name: 'balance',
                            type: 'uint256',
                        },
                        {
                            internalType: 'string',
                            name: 'recipientName',
                            type: 'string',
                        },
                        {
                            internalType: 'address',
                            name: 'recipientAddress',
                            type: 'address',
                        },
                        {
                            internalType: 'string',
                            name: 'cid',
                            type: 'string',
                        },
                        {
                            internalType: 'uint256',
                            name: 'validatedAt',
                            type: 'uint256',
                        },
                        {
                            internalType: 'string',
                            name: 'attestationId',
                            type: 'string',
                        },
                    ],
                    internalType: 'struct FundContract.Metadata',
                    name: '',
                    type: 'tuple',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getOwner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'string',
                    name: '_attestationId',
                    type: 'string',
                },
            ],
            name: 'validate',
            outputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'owner',
                            type: 'address',
                        },
                        {
                            internalType: 'string',
                            name: 'name',
                            type: 'string',
                        },
                        {
                            internalType: 'string',
                            name: 'description',
                            type: 'string',
                        },
                        {
                            internalType: 'uint256',
                            name: 'balance',
                            type: 'uint256',
                        },
                        {
                            internalType: 'string',
                            name: 'recipientName',
                            type: 'string',
                        },
                        {
                            internalType: 'address',
                            name: 'recipientAddress',
                            type: 'address',
                        },
                        {
                            internalType: 'string',
                            name: 'cid',
                            type: 'string',
                        },
                        {
                            internalType: 'uint256',
                            name: 'validatedAt',
                            type: 'uint256',
                        },
                        {
                            internalType: 'string',
                            name: 'attestationId',
                            type: 'string',
                        },
                    ],
                    internalType: 'struct FundContract.Metadata',
                    name: '',
                    type: 'tuple',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
    bytecode:
        '0x608060405242600a553480156200001557600080fd5b5060405162001be538038062001be583398181016040528101906200003b919062000456565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518061012001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020016000815260200160405180602001604052806000815250815250600160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019081620001579190620007af565b5060408201518160020190816200016f9190620007af565b50606082015181600301556080820151816004019081620001919190620007af565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c0820151816006019081620001f09190620007af565b5060e08201518160070155610100820151816008019081620002139190620007af565b5090505050505050505062000896565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200028c8262000241565b810181811067ffffffffffffffff82111715620002ae57620002ad62000252565b5b80604052505050565b6000620002c362000223565b9050620002d1828262000281565b919050565b600067ffffffffffffffff821115620002f457620002f362000252565b5b620002ff8262000241565b9050602081019050919050565b60005b838110156200032c5780820151818401526020810190506200030f565b60008484015250505050565b60006200034f6200034984620002d6565b620002b7565b9050828152602081018484840111156200036e576200036d6200023c565b5b6200037b8482856200030c565b509392505050565b600082601f8301126200039b576200039a62000237565b5b8151620003ad84826020860162000338565b91505092915050565b6000819050919050565b620003cb81620003b6565b8114620003d757600080fd5b50565b600081519050620003eb81620003c0565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200041e82620003f1565b9050919050565b620004308162000411565b81146200043c57600080fd5b50565b600081519050620004508162000425565b92915050565b60008060008060008060c087890312156200047657620004756200022d565b5b600087015167ffffffffffffffff81111562000497576200049662000232565b5b620004a589828a0162000383565b965050602087015167ffffffffffffffff811115620004c957620004c862000232565b5b620004d789828a0162000383565b9550506040620004ea89828a01620003da565b945050606087015167ffffffffffffffff8111156200050e576200050d62000232565b5b6200051c89828a0162000383565b93505060806200052f89828a016200043f565b92505060a087015167ffffffffffffffff81111562000553576200055262000232565b5b6200056189828a0162000383565b9150509295509295509295565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620005c157607f821691505b602082108103620005d757620005d662000579565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006417fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000602565b6200064d868362000602565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006906200068a6200068484620003b6565b62000665565b620003b6565b9050919050565b6000819050919050565b620006ac836200066f565b620006c4620006bb8262000697565b8484546200060f565b825550505050565b600090565b620006db620006cc565b620006e8818484620006a1565b505050565b5b81811015620007105762000704600082620006d1565b600181019050620006ee565b5050565b601f8211156200075f576200072981620005dd565b6200073484620005f2565b8101602085101562000744578190505b6200075c6200075385620005f2565b830182620006ed565b50505b505050565b600082821c905092915050565b6000620007846000198460080262000764565b1980831691505092915050565b60006200079f838362000771565b9150826002028217905092915050565b620007ba826200056e565b67ffffffffffffffff811115620007d657620007d562000252565b5b620007e28254620005a8565b620007ef82828562000714565b600060209050601f83116001811462000827576000841562000812578287015190505b6200081e858262000791565b8655506200088e565b601f1984166200083786620005dd565b60005b8281101562000861578489015182556001820191506020850194506020810190506200083a565b868310156200088157848901516200087d601f89168262000771565b8355505b6001600288020188555050505b505050505050565b61133f80620008a66000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80637a5b4f5914610051578063893d20e81461006f578063cf09e0d01461008d578063d182b83b146100ab575b600080fd5b6100596100db565b6040516100669190610c4d565b60405180910390f35b610077610490565b6040516100849190610c7e565b60405180910390f35b6100956104b9565b6040516100a29190610ca8565b60405180910390f35b6100c560048036038101906100c09190610e0c565b6104bf565b6040516100d29190610c4d565b60405180910390f35b6100e3610a0a565b6001604051806101200160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461015790610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461018390610e84565b80156101d05780601f106101a5576101008083540402835291602001916101d0565b820191906000526020600020905b8154815290600101906020018083116101b357829003601f168201915b505050505081526020016002820180546101e990610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461021590610e84565b80156102625780601f1061023757610100808354040283529160200191610262565b820191906000526020600020905b81548152906001019060200180831161024557829003601f168201915b505050505081526020016003820154815260200160048201805461028590610e84565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610e84565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160068201805461036d90610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461039990610e84565b80156103e65780601f106103bb576101008083540402835291602001916103e6565b820191906000526020600020905b8154815290600101906020018083116103c957829003601f168201915b505050505081526020016007820154815260200160088201805461040990610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461043590610e84565b80156104825780601f1061045757610100808354040283529160200191610482565b820191906000526020600020905b81548152906001019060200180831161046557829003601f168201915b505050505081525050905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600a5481565b6104c7610a0a565b60003373ffffffffffffffffffffffffffffffffffffffff16319050600160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610576576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056d90610f38565b60405180910390fd5b6001600301548110156105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590610fa4565b60405180910390fd5b600060016007015414610606576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd90611010565b60405180910390fd5b42600160070181905550826001600801908161062291906111dc565b507fba0b6a5066b6f241ed188c4a1c886d383933a5f79088b468808198c01da0cf708360405161065291906112e7565b60405180910390a16001604051806101200160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546106ce90610e84565b80601f01602080910402602001604051908101604052809291908181526020018280546106fa90610e84565b80156107475780601f1061071c57610100808354040283529160200191610747565b820191906000526020600020905b81548152906001019060200180831161072a57829003601f168201915b5050505050815260200160028201805461076090610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461078c90610e84565b80156107d95780601f106107ae576101008083540402835291602001916107d9565b820191906000526020600020905b8154815290600101906020018083116107bc57829003601f168201915b50505050508152602001600382015481526020016004820180546107fc90610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461082890610e84565b80156108755780601f1061084a57610100808354040283529160200191610875565b820191906000526020600020905b81548152906001019060200180831161085857829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820180546108e490610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461091090610e84565b801561095d5780601f106109325761010080835404028352916020019161095d565b820191906000526020600020905b81548152906001019060200180831161094057829003601f168201915b505050505081526020016007820154815260200160088201805461098090610e84565b80601f01602080910402602001604051908101604052809291908181526020018280546109ac90610e84565b80156109f95780601f106109ce576101008083540402835291602001916109f9565b820191906000526020600020905b8154815290600101906020018083116109dc57829003601f168201915b505050505081525050915050919050565b604051806101200160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001606081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aad82610a82565b9050919050565b610abd81610aa2565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610afd578082015181840152602081019050610ae2565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b2582610ac3565b610b2f8185610ace565b9350610b3f818560208601610adf565b610b4881610b09565b840191505092915050565b6000819050919050565b610b6681610b53565b82525050565b600061012083016000830151610b856000860182610ab4565b5060208301518482036020860152610b9d8282610b1a565b91505060408301518482036040860152610bb78282610b1a565b9150506060830151610bcc6060860182610b5d565b5060808301518482036080860152610be48282610b1a565b91505060a0830151610bf960a0860182610ab4565b5060c083015184820360c0860152610c118282610b1a565b91505060e0830151610c2660e0860182610b5d565b50610100830151848203610100860152610c408282610b1a565b9150508091505092915050565b60006020820190508181036000830152610c678184610b6c565b905092915050565b610c7881610aa2565b82525050565b6000602082019050610c936000830184610c6f565b92915050565b610ca281610b53565b82525050565b6000602082019050610cbd6000830184610c99565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d1982610b09565b810181811067ffffffffffffffff82111715610d3857610d37610ce1565b5b80604052505050565b6000610d4b610cc3565b9050610d578282610d10565b919050565b600067ffffffffffffffff821115610d7757610d76610ce1565b5b610d8082610b09565b9050602081019050919050565b82818337600083830152505050565b6000610daf610daa84610d5c565b610d41565b905082815260208101848484011115610dcb57610dca610cdc565b5b610dd6848285610d8d565b509392505050565b600082601f830112610df357610df2610cd7565b5b8135610e03848260208601610d9c565b91505092915050565b600060208284031215610e2257610e21610ccd565b5b600082013567ffffffffffffffff811115610e4057610e3f610cd2565b5b610e4c84828501610dde565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e9c57607f821691505b602082108103610eaf57610eae610e55565b5b50919050565b600082825260208201905092915050565b7f4f6e6c792074686520696e74656e64656420726563697069656e742063616e2060008201527f76616c69646174652074686569722062616c616e636500000000000000000000602082015250565b6000610f22603683610eb5565b9150610f2d82610ec6565b604082019050919050565b60006020820190508181036000830152610f5181610f15565b9050919050565b7f42616c616e6365206973206c657373207468616e206578706563746564000000600082015250565b6000610f8e601d83610eb5565b9150610f9982610f58565b602082019050919050565b60006020820190508181036000830152610fbd81610f81565b9050919050565b7f42616c616e636520616c72656164792076616c69646174656400000000000000600082015250565b6000610ffa601983610eb5565b915061100582610fc4565b602082019050919050565b6000602082019050818103600083015261102981610fed565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026110927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611055565b61109c8683611055565b95508019841693508086168417925050509392505050565b6000819050919050565b60006110d96110d46110cf84610b53565b6110b4565b610b53565b9050919050565b6000819050919050565b6110f3836110be565b6111076110ff826110e0565b848454611062565b825550505050565b600090565b61111c61110f565b6111278184846110ea565b505050565b5b8181101561114b57611140600082611114565b60018101905061112d565b5050565b601f8211156111905761116181611030565b61116a84611045565b81016020851015611179578190505b61118d61118585611045565b83018261112c565b50505b505050565b600082821c905092915050565b60006111b360001984600802611195565b1980831691505092915050565b60006111cc83836111a2565b9150826002028217905092915050565b6111e582610ac3565b67ffffffffffffffff8111156111fe576111fd610ce1565b5b6112088254610e84565b61121382828561114f565b600060209050601f8311600181146112465760008415611234578287015190505b61123e85826111c0565b8655506112a6565b601f19841661125486611030565b60005b8281101561127c57848901518255600182019150602085019450602081019050611257565b868310156112995784890151611295601f8916826111a2565b8355505b6001600288020188555050505b505050505050565b60006112b982610ac3565b6112c38185610eb5565b93506112d3818560208601610adf565b6112dc81610b09565b840191505092915050565b6000602082019050818103600083015261130181846112ae565b90509291505056fea26469706673582212200f7f0cc3e16d7223fce49752867bfe3aa3470a343713e2064b75259eda4b303464736f6c63430008180033',
    deployedBytecode:
        '0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80637a5b4f5914610051578063893d20e81461006f578063cf09e0d01461008d578063d182b83b146100ab575b600080fd5b6100596100db565b6040516100669190610c4d565b60405180910390f35b610077610490565b6040516100849190610c7e565b60405180910390f35b6100956104b9565b6040516100a29190610ca8565b60405180910390f35b6100c560048036038101906100c09190610e0c565b6104bf565b6040516100d29190610c4d565b60405180910390f35b6100e3610a0a565b6001604051806101200160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461015790610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461018390610e84565b80156101d05780601f106101a5576101008083540402835291602001916101d0565b820191906000526020600020905b8154815290600101906020018083116101b357829003601f168201915b505050505081526020016002820180546101e990610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461021590610e84565b80156102625780601f1061023757610100808354040283529160200191610262565b820191906000526020600020905b81548152906001019060200180831161024557829003601f168201915b505050505081526020016003820154815260200160048201805461028590610e84565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610e84565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160068201805461036d90610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461039990610e84565b80156103e65780601f106103bb576101008083540402835291602001916103e6565b820191906000526020600020905b8154815290600101906020018083116103c957829003601f168201915b505050505081526020016007820154815260200160088201805461040990610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461043590610e84565b80156104825780601f1061045757610100808354040283529160200191610482565b820191906000526020600020905b81548152906001019060200180831161046557829003601f168201915b505050505081525050905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600a5481565b6104c7610a0a565b60003373ffffffffffffffffffffffffffffffffffffffff16319050600160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610576576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056d90610f38565b60405180910390fd5b6001600301548110156105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590610fa4565b60405180910390fd5b600060016007015414610606576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd90611010565b60405180910390fd5b42600160070181905550826001600801908161062291906111dc565b507fba0b6a5066b6f241ed188c4a1c886d383933a5f79088b468808198c01da0cf708360405161065291906112e7565b60405180910390a16001604051806101200160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546106ce90610e84565b80601f01602080910402602001604051908101604052809291908181526020018280546106fa90610e84565b80156107475780601f1061071c57610100808354040283529160200191610747565b820191906000526020600020905b81548152906001019060200180831161072a57829003601f168201915b5050505050815260200160028201805461076090610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461078c90610e84565b80156107d95780601f106107ae576101008083540402835291602001916107d9565b820191906000526020600020905b8154815290600101906020018083116107bc57829003601f168201915b50505050508152602001600382015481526020016004820180546107fc90610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461082890610e84565b80156108755780601f1061084a57610100808354040283529160200191610875565b820191906000526020600020905b81548152906001019060200180831161085857829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820180546108e490610e84565b80601f016020809104026020016040519081016040528092919081815260200182805461091090610e84565b801561095d5780601f106109325761010080835404028352916020019161095d565b820191906000526020600020905b81548152906001019060200180831161094057829003601f168201915b505050505081526020016007820154815260200160088201805461098090610e84565b80601f01602080910402602001604051908101604052809291908181526020018280546109ac90610e84565b80156109f95780601f106109ce576101008083540402835291602001916109f9565b820191906000526020600020905b8154815290600101906020018083116109dc57829003601f168201915b505050505081525050915050919050565b604051806101200160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001606081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aad82610a82565b9050919050565b610abd81610aa2565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610afd578082015181840152602081019050610ae2565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b2582610ac3565b610b2f8185610ace565b9350610b3f818560208601610adf565b610b4881610b09565b840191505092915050565b6000819050919050565b610b6681610b53565b82525050565b600061012083016000830151610b856000860182610ab4565b5060208301518482036020860152610b9d8282610b1a565b91505060408301518482036040860152610bb78282610b1a565b9150506060830151610bcc6060860182610b5d565b5060808301518482036080860152610be48282610b1a565b91505060a0830151610bf960a0860182610ab4565b5060c083015184820360c0860152610c118282610b1a565b91505060e0830151610c2660e0860182610b5d565b50610100830151848203610100860152610c408282610b1a565b9150508091505092915050565b60006020820190508181036000830152610c678184610b6c565b905092915050565b610c7881610aa2565b82525050565b6000602082019050610c936000830184610c6f565b92915050565b610ca281610b53565b82525050565b6000602082019050610cbd6000830184610c99565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d1982610b09565b810181811067ffffffffffffffff82111715610d3857610d37610ce1565b5b80604052505050565b6000610d4b610cc3565b9050610d578282610d10565b919050565b600067ffffffffffffffff821115610d7757610d76610ce1565b5b610d8082610b09565b9050602081019050919050565b82818337600083830152505050565b6000610daf610daa84610d5c565b610d41565b905082815260208101848484011115610dcb57610dca610cdc565b5b610dd6848285610d8d565b509392505050565b600082601f830112610df357610df2610cd7565b5b8135610e03848260208601610d9c565b91505092915050565b600060208284031215610e2257610e21610ccd565b5b600082013567ffffffffffffffff811115610e4057610e3f610cd2565b5b610e4c84828501610dde565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e9c57607f821691505b602082108103610eaf57610eae610e55565b5b50919050565b600082825260208201905092915050565b7f4f6e6c792074686520696e74656e64656420726563697069656e742063616e2060008201527f76616c69646174652074686569722062616c616e636500000000000000000000602082015250565b6000610f22603683610eb5565b9150610f2d82610ec6565b604082019050919050565b60006020820190508181036000830152610f5181610f15565b9050919050565b7f42616c616e6365206973206c657373207468616e206578706563746564000000600082015250565b6000610f8e601d83610eb5565b9150610f9982610f58565b602082019050919050565b60006020820190508181036000830152610fbd81610f81565b9050919050565b7f42616c616e636520616c72656164792076616c69646174656400000000000000600082015250565b6000610ffa601983610eb5565b915061100582610fc4565b602082019050919050565b6000602082019050818103600083015261102981610fed565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026110927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611055565b61109c8683611055565b95508019841693508086168417925050509392505050565b6000819050919050565b60006110d96110d46110cf84610b53565b6110b4565b610b53565b9050919050565b6000819050919050565b6110f3836110be565b6111076110ff826110e0565b848454611062565b825550505050565b600090565b61111c61110f565b6111278184846110ea565b505050565b5b8181101561114b57611140600082611114565b60018101905061112d565b5050565b601f8211156111905761116181611030565b61116a84611045565b81016020851015611179578190505b61118d61118585611045565b83018261112c565b50505b505050565b600082821c905092915050565b60006111b360001984600802611195565b1980831691505092915050565b60006111cc83836111a2565b9150826002028217905092915050565b6111e582610ac3565b67ffffffffffffffff8111156111fe576111fd610ce1565b5b6112088254610e84565b61121382828561114f565b600060209050601f8311600181146112465760008415611234578287015190505b61123e85826111c0565b8655506112a6565b601f19841661125486611030565b60005b8281101561127c57848901518255600182019150602085019450602081019050611257565b868310156112995784890151611295601f8916826111a2565b8355505b6001600288020188555050505b505050505050565b60006112b982610ac3565b6112c38185610eb5565b93506112d3818560208601610adf565b6112dc81610b09565b840191505092915050565b6000602082019050818103600083015261130181846112ae565b90509291505056fea26469706673582212200f7f0cc3e16d7223fce49752867bfe3aa3470a343713e2064b75259eda4b303464736f6c63430008180033',
    linkReferences: {},
    deployedLinkReferences: {},
}
