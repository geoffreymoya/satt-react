// testnet



export const CMP_FACTORY = "0x000f347fdb83612b23475147c6660d0366ba808ffe4f45c4adda58f602c603d6";

export const CMP_HASH = "0x00b2a38345143d41b4c89e8007d80bfc0d6c1fb68bf8aa2ef6ca1d553c2638a2"; 
export const SATT_TOKEN = "0x17b4813ccbd8e5cfe1c5a5867695bbbee72eb48046a5412791fe05642ddec92";

export const IPFS_ENDPOINT = 'http://127.0.0.1:5001'
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/'
export const GRAPHQL_ENDPOINT = 'http://localhost:5000/graphql'
export const CMP_FACTORY_ABI = [
  {
    "name": "owner",
    "type": "function",
    "inputs": [],
    "outputs": [
      {
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "state_mutability": "view"
  },
  {
    "name": "campaign_hash",
    "type": "function",
    "inputs": [],
    "outputs": [
      {
        "type": "core::starknet::class_hash::ClassHash"
      }
    ],
    "state_mutability": "view"
  },
  {
    "name": "oracle",
    "type": "function",
    "inputs": [],
    "outputs": [
      {
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "state_mutability": "view"
  },
  {
    "name": "constructor",
    "type": "function",
    "inputs": [
      {
        "name": "owner",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "set_campaign_hash",
    "type": "function",
    "inputs": [
      {
        "name": "cmp",
        "type": "core::starknet::class_hash::ClassHash"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "set_owner",
    "type": "function",
    "inputs": [
      {
        "name": "new",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "set_oracle",
    "type": "function",
    "inputs": [
      {
        "name": "new",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "createCampaign",
    "type": "function",
    "inputs": [
      {
        "name": "url_first",
        "type": "core::felt252"
      },
      {
        "name": "url_last",
        "type": "core::felt252"
      },
      {
        "name": "startDate",
        "type": "core::integer::u64"
      },
      {
        "name": "endDate",
        "type": "core::integer::u64"
      },
      {
        "name": "amount",
        "type": "core::integer::u256"
      },
      {
        "name": "token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "idSn",
        "type": "core::integer::u8"
      },
      {
        "name": "viewRatio",
        "type": "core::integer::u64"
      },
      {
        "name": "likeRatio",
        "type": "core::integer::u64"
      },
      {
        "name": "shareRatio",
        "type": "core::integer::u64"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "ask",
    "type": "function",
    "inputs": [
      {
        "name": "id",
        "type": "core::felt252"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "answer",
    "type": "function",
    "inputs": [
      {
        "name": "id",
        "type": "core::felt252"
      },
      {
        "name": "campaign",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "views",
        "type": "core::integer::u64"
      },
      {
        "name": "likes",
        "type": "core::integer::u64"
      },
      {
        "name": "shares",
        "type": "core::integer::u64"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "CampaignCreated",
    "type": "event",
    "inputs": [
      {
        "name": "id",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "url_first",
        "type": "core::felt252"
      },
      {
        "name": "url_last",
        "type": "core::felt252"
      },
      {
        "name": "advertiser",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "startDate",
        "type": "core::integer::u64"
      },
      {
        "name": "endDate",
        "type": "core::integer::u64"
      },
      {
        "name": "idSn",
        "type": "core::integer::u8"
      },
      {
        "name": "viewRatio",
        "type": "core::integer::u64"
      },
      {
        "name": "likeRatio",
        "type": "core::integer::u64"
      },
      {
        "name": "shareRatio",
        "type": "core::integer::u64"
      }
    ]
  },
  {
    "name": "Request",
    "type": "event",
    "inputs": [
      {
        "name": "campaign",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "id",
        "type": "core::felt252"
      },
      {
        "name": "idSn",
        "type": "core::integer::u8"
      },
      {
        "name": "idUser",
        "type": "core::felt252"
      },
      {
        "name": "idPost",
        "type": "core::felt252"
      }
    ]
  }
]
export const APPROVE_ABI = [
    {
      "name": "constructor",
      "type": "function",
      "inputs": [
        {
          "name": "name",
          "type": "core::felt252"
        },
        {
          "name": "symbol",
          "type": "core::felt252"
        },
        {
          "name": "initial_supply",
          "type": "core::integer::u256"
        },
        {
          "name": "recipient",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "minter",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "outputs": [],
      "state_mutability": "external"
    },
    {
      "name": "name",
      "type": "function",
      "inputs": [],
      "outputs": [
        {
          "type": "core::felt252"
        }
      ],
      "state_mutability": "view"
    },
    {
      "name": "symbol",
      "type": "function",
      "inputs": [],
      "outputs": [
        {
          "type": "core::felt252"
        }
      ],
      "state_mutability": "view"
    },
    {
      "name": "decimals",
      "type": "function",
      "inputs": [],
      "outputs": [
        {
          "type": "core::integer::u8"
        }
      ],
      "state_mutability": "view"
    },
    {
      "name": "totalSupply",
      "type": "function",
      "inputs": [],
      "outputs": [
        {
          "type": "core::integer::u256"
        }
      ],
      "state_mutability": "view"
    },
    {
      "name": "balanceOf",
      "type": "function",
      "inputs": [
        {
          "name": "account",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "outputs": [
        {
          "type": "core::integer::u256"
        }
      ],
      "state_mutability": "view"
    },
    {
      "name": "allowance",
      "type": "function",
      "inputs": [
        {
          "name": "owner",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "outputs": [
        {
          "type": "core::integer::u256"
        }
      ],
      "state_mutability": "view"
    },
    {
      "name": "permittedMinter",
      "type": "function",
      "inputs": [],
      "outputs": [
        {
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "state_mutability": "view"
    },
    {
      "name": "transfer",
      "type": "function",
      "inputs": [
        {
          "name": "recipient",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "amount",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "transferFrom",
      "type": "function",
      "inputs": [
        {
          "name": "sender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "recipient",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "amount",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "approve",
      "type": "function",
      "inputs": [
        {
          "name": "spender",
          "type": "felt"
        },
        {
          "name": "amount",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "increase_allowance",
      "type": "function",
      "inputs": [
        {
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "added_value",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "decrease_allowance",
      "type": "function",
      "inputs": [
        {
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "subtracted_value",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "permissionedBurn",
      "type": "function",
      "inputs": [
        {
          "name": "account",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "amount",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "permissionedMint",
      "type": "function",
      "inputs": [
        {
          "name": "account",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "amount",
          "type": "core::integer::u256"
        }
      ],
      "outputs": [
        {
          "type": "core::bool"
        }
      ],
      "state_mutability": "external"
    },
    {
      "name": "owner",
      "type": "function",
      "inputs": [],
      "outputs": [
        {
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "state_mutability": "view"
    },
    {
      "name": "transferOwnership",
      "type": "function",
      "inputs": [
        {
          "name": "new_owner",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "outputs": [],
      "state_mutability": "external"
    },
    {
      "name": "renounceOwnership",
      "type": "function",
      "inputs": [],
      "outputs": [],
      "state_mutability": "external"
    },
    {
      "name": "setMinter",
      "type": "function",
      "inputs": [
        {
          "name": "new_minter",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ],
      "outputs": [],
      "state_mutability": "external"
    },
    {
      "name": "Transfer",
      "type": "event",
      "inputs": [
        {
          "name": "from",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "to",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "value",
          "type": "core::integer::u256"
        }
      ]
    },
    {
      "name": "Approval",
      "type": "event",
      "inputs": [
        {
          "name": "owner",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "spender",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "value",
          "type": "core::integer::u256"
        }
      ]
    },
    {
      "name": "OwnershipTransferred",
      "type": "event",
      "inputs": [
        {
          "name": "previous_owner",
          "type": "core::starknet::contract_address::ContractAddress"
        },
        {
          "name": "new_owner",
          "type": "core::starknet::contract_address::ContractAddress"
        }
      ]
    }
  ]
