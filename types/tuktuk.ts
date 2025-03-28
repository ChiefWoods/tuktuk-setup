/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/tuktuk.json`.
 */
export type Tuktuk = {
  "address": "tuktukUrfhXT6ZT77QTU8RQtvgL967uRuVagWF57zVA",
  "metadata": {
    "name": "tuktuk",
    "version": "0.2.1",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addQueueAuthorityV0",
      "discriminator": [
        122,
        25,
        219,
        246,
        39,
        195,
        74,
        93
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "updateAuthority",
          "signer": true,
          "relations": [
            "taskQueue"
          ]
        },
        {
          "name": "queueAuthority"
        },
        {
          "name": "taskQueueAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  97,
                  115,
                  107,
                  95,
                  113,
                  117,
                  101,
                  117,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "taskQueue"
              },
              {
                "kind": "account",
                "path": "queueAuthority"
              }
            ]
          }
        },
        {
          "name": "taskQueue",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "closeTaskQueueV0",
      "discriminator": [
        196,
        228,
        35,
        71,
        131,
        69,
        175,
        176
      ],
      "accounts": [
        {
          "name": "rentRefund",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "updateAuthority",
          "signer": true,
          "relations": [
            "taskQueue"
          ]
        },
        {
          "name": "tuktukConfig",
          "writable": true,
          "relations": [
            "taskQueue"
          ]
        },
        {
          "name": "taskQueue",
          "writable": true
        },
        {
          "name": "taskQueueNameMapping",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "dequeueTaskV0",
      "discriminator": [
        92,
        141,
        249,
        132,
        219,
        109,
        215,
        126
      ],
      "accounts": [
        {
          "name": "queueAuthority",
          "signer": true
        },
        {
          "name": "rentRefund",
          "writable": true,
          "relations": [
            "task"
          ]
        },
        {
          "name": "taskQueueAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  97,
                  115,
                  107,
                  95,
                  113,
                  117,
                  101,
                  117,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "taskQueue"
              },
              {
                "kind": "account",
                "path": "queueAuthority"
              }
            ]
          }
        },
        {
          "name": "taskQueue",
          "writable": true,
          "relations": [
            "task"
          ]
        },
        {
          "name": "task",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "dummyIx",
      "discriminator": [
        234,
        95,
        176,
        185,
        7,
        42,
        35,
        159
      ],
      "accounts": [
        {
          "name": "dummy",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "initializeTaskQueueV0",
      "discriminator": [
        150,
        100,
        6,
        8,
        32,
        179,
        250,
        186
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tuktukConfig",
          "writable": true
        },
        {
          "name": "updateAuthority"
        },
        {
          "name": "taskQueue",
          "writable": true
        },
        {
          "name": "taskQueueNameMapping",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "initializeTaskQueueArgsV0"
            }
          }
        }
      ]
    },
    {
      "name": "initializeTuktukConfigV0",
      "discriminator": [
        67,
        128,
        98,
        227,
        103,
        60,
        179,
        214
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "approver",
          "signer": true
        },
        {
          "name": "authority"
        },
        {
          "name": "tuktukConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  117,
                  107,
                  116,
                  117,
                  107,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "initializeTuktukConfigArgsV0"
            }
          }
        }
      ]
    },
    {
      "name": "queueTaskV0",
      "discriminator": [
        177,
        95,
        195,
        252,
        241,
        2,
        178,
        88
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "queueAuthority",
          "signer": true
        },
        {
          "name": "taskQueueAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  97,
                  115,
                  107,
                  95,
                  113,
                  117,
                  101,
                  117,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "taskQueue"
              },
              {
                "kind": "account",
                "path": "queueAuthority"
              }
            ]
          }
        },
        {
          "name": "taskQueue",
          "writable": true
        },
        {
          "name": "task",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "queueTaskArgsV0"
            }
          }
        }
      ]
    },
    {
      "name": "removeQueueAuthorityV0",
      "discriminator": [
        180,
        26,
        196,
        229,
        80,
        40,
        245,
        187
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "rentRefund",
          "writable": true
        },
        {
          "name": "updateAuthority",
          "signer": true,
          "relations": [
            "taskQueue"
          ]
        },
        {
          "name": "queueAuthority"
        },
        {
          "name": "taskQueueAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  97,
                  115,
                  107,
                  95,
                  113,
                  117,
                  101,
                  117,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "taskQueue"
              },
              {
                "kind": "account",
                "path": "queueAuthority"
              }
            ]
          }
        },
        {
          "name": "taskQueue",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "returnTasksV0",
      "discriminator": [
        38,
        235,
        111,
        148,
        44,
        99,
        189,
        164
      ],
      "accounts": [
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "returnTasksArgsV0"
            }
          }
        }
      ],
      "returns": {
        "defined": {
          "name": "runTaskReturnV0"
        }
      }
    },
    {
      "name": "runTaskV0",
      "discriminator": [
        52,
        184,
        39,
        129,
        126,
        245,
        176,
        237
      ],
      "accounts": [
        {
          "name": "crankTurner",
          "writable": true,
          "signer": true
        },
        {
          "name": "rentRefund",
          "writable": true,
          "relations": [
            "task"
          ]
        },
        {
          "name": "taskQueue",
          "writable": true,
          "relations": [
            "task"
          ]
        },
        {
          "name": "task",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "sysvarInstructions",
          "docs": [
            "the supplied Sysvar could be anything else.",
            "The Instruction Sysvar has not been implemented",
            "in the Anchor framework yet, so this is the safe approach."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "runTaskArgsV0"
            }
          }
        }
      ]
    },
    {
      "name": "updateTaskQueueV0",
      "discriminator": [
        107,
        147,
        81,
        119,
        75,
        1,
        18,
        41
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "updateAuthority",
          "signer": true,
          "relations": [
            "taskQueue"
          ]
        },
        {
          "name": "taskQueue",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "updateTaskQueueArgsV0"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "remoteTaskTransactionV0",
      "discriminator": [
        244,
        225,
        238,
        116,
        199,
        12,
        9,
        191
      ]
    },
    {
      "name": "taskQueueAuthorityV0",
      "discriminator": [
        206,
        37,
        171,
        34,
        162,
        191,
        47,
        50
      ]
    },
    {
      "name": "taskQueueNameMappingV0",
      "discriminator": [
        112,
        41,
        174,
        94,
        48,
        84,
        56,
        217
      ]
    },
    {
      "name": "taskQueueV0",
      "discriminator": [
        150,
        24,
        232,
        159,
        105,
        32,
        161,
        17
      ]
    },
    {
      "name": "taskV0",
      "discriminator": [
        242,
        93,
        213,
        169,
        42,
        94,
        239,
        80
      ]
    },
    {
      "name": "tuktukConfigV0",
      "discriminator": [
        198,
        255,
        138,
        207,
        252,
        149,
        60,
        1
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "taskAlreadyExists",
      "msg": "Task already exists"
    },
    {
      "code": 6001,
      "name": "invalidSigner",
      "msg": "Signer account mismatched account in definition"
    },
    {
      "code": 6002,
      "name": "invalidWritable",
      "msg": "Writable account mismatched account in definition"
    },
    {
      "code": 6003,
      "name": "invalidAccount",
      "msg": "Account mismatched account in definition"
    },
    {
      "code": 6004,
      "name": "invalidDataIncrease",
      "msg": "Invalid data increase"
    },
    {
      "code": 6005,
      "name": "taskNotReady",
      "msg": "Task not ready"
    },
    {
      "code": 6006,
      "name": "taskQueueNotEmpty",
      "msg": "Task queue not empty"
    },
    {
      "code": 6007,
      "name": "freeTaskAccountNotEmpty",
      "msg": "Free task account not empty"
    },
    {
      "code": 6008,
      "name": "invalidTaskPda",
      "msg": "Invalid task PDA"
    },
    {
      "code": 6009,
      "name": "taskQueueInsufficientFunds",
      "msg": "Task queue insufficient funds"
    },
    {
      "code": 6010,
      "name": "sigVerificationFailed",
      "msg": "Sig verification failed"
    },
    {
      "code": 6011,
      "name": "invalidTransactionSource",
      "msg": "Invalid transaction source"
    },
    {
      "code": 6012,
      "name": "invalidVerificationAccountsHash",
      "msg": "Invalid task verification hash"
    },
    {
      "code": 6013,
      "name": "invalidRentRefund",
      "msg": "Invalid rent refund"
    },
    {
      "code": 6014,
      "name": "invalidTaskId",
      "msg": "Invalid task id"
    },
    {
      "code": 6015,
      "name": "dummyInstruction",
      "msg": "Don't use the dummy instruction"
    },
    {
      "code": 6016,
      "name": "invalidDescriptionLength",
      "msg": "Invalid description length"
    },
    {
      "code": 6017,
      "name": "taskQueueHasQueueAuthorities",
      "msg": "Task queue has queue authorities"
    }
  ],
  "types": [
    {
      "name": "compiledInstructionV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programIdIndex",
            "docs": [
              "Index into the transaction keys array indicating the program account that executes this instruction."
            ],
            "type": "u8"
          },
          {
            "name": "accounts",
            "docs": [
              "Ordered indices into the transaction keys array indicating which accounts to pass to the program."
            ],
            "type": "bytes"
          },
          {
            "name": "data",
            "docs": [
              "The program input data."
            ],
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "compiledTransactionV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "numRwSigners",
            "type": "u8"
          },
          {
            "name": "numRoSigners",
            "type": "u8"
          },
          {
            "name": "numRw",
            "type": "u8"
          },
          {
            "name": "accounts",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "instructions",
            "type": {
              "vec": {
                "defined": {
                  "name": "compiledInstructionV0"
                }
              }
            }
          },
          {
            "name": "signerSeeds",
            "docs": [
              "Additional signer seeds. Should include bump. Useful for things like initializing a mint where",
              "you cannot pass a keypair.",
              "Note that these seeds will be prefixed with \"custom\", task_queue.key",
              "and the bump you pass and account should be consistent with this. But to save space",
              "in the instruction, they should be ommitted here. See tests for examples"
            ],
            "type": {
              "vec": {
                "vec": "bytes"
              }
            }
          }
        ]
      }
    },
    {
      "name": "initializeTaskQueueArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minCrankReward",
            "type": "u64"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "capacity",
            "type": "u16"
          },
          {
            "name": "lookupTables",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "staleTaskAge",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "initializeTuktukConfigArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minDeposit",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "queueTaskArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u16"
          },
          {
            "name": "trigger",
            "type": {
              "defined": {
                "name": "triggerV0"
              }
            }
          },
          {
            "name": "transaction",
            "type": {
              "defined": {
                "name": "transactionSourceV0"
              }
            }
          },
          {
            "name": "crankReward",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "freeTasks",
            "type": "u8"
          },
          {
            "name": "description",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "remoteTaskTransactionV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "verificationHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "transaction",
            "type": {
              "defined": {
                "name": "compiledTransactionV0"
              }
            }
          }
        ]
      }
    },
    {
      "name": "returnTasksArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tasks",
            "type": {
              "vec": {
                "defined": {
                  "name": "taskReturnV0"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "runTaskArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "freeTaskIds",
            "type": {
              "vec": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "runTaskReturnV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tasks",
            "type": {
              "vec": {
                "defined": {
                  "name": "taskReturnV0"
                }
              }
            }
          },
          {
            "name": "tasksAccounts",
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "taskQueueAuthorityV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "taskQueue",
            "type": "pubkey"
          },
          {
            "name": "queueAuthority",
            "type": "pubkey"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "taskQueueNameMappingV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "taskQueue",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "taskQueueV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tuktukConfig",
            "type": "pubkey"
          },
          {
            "name": "id",
            "type": "u32"
          },
          {
            "name": "updateAuthority",
            "type": "pubkey"
          },
          {
            "name": "reserved",
            "type": "pubkey"
          },
          {
            "name": "minCrankReward",
            "type": "u64"
          },
          {
            "name": "uncollectedProtocolFees",
            "type": "u64"
          },
          {
            "name": "capacity",
            "type": "u16"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "taskBitmap",
            "type": "bytes"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "lookupTables",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "numQueueAuthorities",
            "type": "u16"
          },
          {
            "name": "staleTaskAge",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "taskReturnV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "trigger",
            "type": {
              "defined": {
                "name": "triggerV0"
              }
            }
          },
          {
            "name": "transaction",
            "type": {
              "defined": {
                "name": "transactionSourceV0"
              }
            }
          },
          {
            "name": "crankReward",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "freeTasks",
            "type": "u8"
          },
          {
            "name": "description",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "taskV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "taskQueue",
            "type": "pubkey"
          },
          {
            "name": "rentAmount",
            "type": "u64"
          },
          {
            "name": "crankReward",
            "type": "u64"
          },
          {
            "name": "id",
            "type": "u16"
          },
          {
            "name": "trigger",
            "type": {
              "defined": {
                "name": "triggerV0"
              }
            }
          },
          {
            "name": "rentRefund",
            "type": "pubkey"
          },
          {
            "name": "transaction",
            "type": {
              "defined": {
                "name": "transactionSourceV0"
              }
            }
          },
          {
            "name": "queuedAt",
            "type": "i64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "freeTasks",
            "type": "u8"
          },
          {
            "name": "description",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "transactionSourceV0",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "compiledV0",
            "fields": [
              {
                "defined": {
                  "name": "compiledTransactionV0"
                }
              }
            ]
          },
          {
            "name": "remoteV0",
            "fields": [
              {
                "name": "url",
                "type": "string"
              },
              {
                "name": "signer",
                "type": "pubkey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "triggerV0",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "now"
          },
          {
            "name": "timestamp",
            "fields": [
              "i64"
            ]
          }
        ]
      }
    },
    {
      "name": "tuktukConfigV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minTaskQueueId",
            "type": "u32"
          },
          {
            "name": "nextTaskQueueId",
            "type": "u32"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "minDeposit",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "updateTaskQueueArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minCrankReward",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "capacity",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "lookupTables",
            "type": {
              "option": {
                "vec": "pubkey"
              }
            }
          },
          {
            "name": "updateAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "staleTaskAge",
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    }
  ]
};
