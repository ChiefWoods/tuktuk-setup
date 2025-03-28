/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/cron.json`.
 */
export type Cron = {
  "address": "cronAjRZnJn3MTP3B9kE62NWDrjSuAPVXf9c4hu4grM",
  "metadata": {
    "name": "cron",
    "version": "0.1.2",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addCronTransactionV0",
      "discriminator": [
        22,
        94,
        81,
        77,
        143,
        154,
        255,
        102
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "signer": true,
          "relations": [
            "cronJob"
          ]
        },
        {
          "name": "cronJob",
          "writable": true
        },
        {
          "name": "cronJobTransaction",
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
              "name": "addCronTransactionArgsV0"
            }
          }
        }
      ]
    },
    {
      "name": "closeCronJobV0",
      "discriminator": [
        114,
        152,
        214,
        24,
        97,
        36,
        231,
        102
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
          "name": "authority",
          "signer": true,
          "relations": [
            "cronJob"
          ]
        },
        {
          "name": "userCronJobs",
          "writable": true,
          "relations": [
            "cronJob"
          ]
        },
        {
          "name": "cronJob",
          "writable": true
        },
        {
          "name": "cronJobNameMapping",
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
      "name": "initializeCronJobV0",
      "discriminator": [
        246,
        64,
        133,
        115,
        169,
        84,
        130,
        133
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
            ],
            "program": {
              "kind": "account",
              "path": "tuktukProgram"
            }
          }
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "userCronJobs",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  99,
                  114,
                  111,
                  110,
                  95,
                  106,
                  111,
                  98,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "cronJob",
          "writable": true
        },
        {
          "name": "cronJobNameMapping",
          "writable": true
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
          "name": "taskReturnAccount1",
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
                  114,
                  101,
                  116,
                  117,
                  114,
                  110,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  49
                ]
              },
              {
                "kind": "account",
                "path": "cronJob"
              }
            ]
          }
        },
        {
          "name": "taskReturnAccount2",
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
                  114,
                  101,
                  116,
                  117,
                  114,
                  110,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  50
                ]
              },
              {
                "kind": "account",
                "path": "cronJob"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tuktukProgram",
          "address": "tuktukUrfhXT6ZT77QTU8RQtvgL967uRuVagWF57zVA"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "initializeCronJobArgsV0"
            }
          }
        }
      ]
    },
    {
      "name": "queueCronTasksV0",
      "discriminator": [
        189,
        88,
        205,
        111,
        249,
        161,
        241,
        211
      ],
      "accounts": [
        {
          "name": "cronJob",
          "writable": true
        },
        {
          "name": "taskQueue",
          "relations": [
            "cronJob"
          ]
        },
        {
          "name": "taskReturnAccount1",
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
                  114,
                  101,
                  116,
                  117,
                  114,
                  110,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  49
                ]
              },
              {
                "kind": "account",
                "path": "cronJob"
              }
            ]
          }
        },
        {
          "name": "taskReturnAccount2",
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
                  114,
                  101,
                  116,
                  117,
                  114,
                  110,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  50
                ]
              },
              {
                "kind": "account",
                "path": "cronJob"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [],
      "returns": {
        "defined": {
          "name": "runTaskReturnV0"
        }
      }
    },
    {
      "name": "removeCronTransactionV0",
      "discriminator": [
        207,
        237,
        8,
        195,
        65,
        111,
        124,
        247
      ],
      "accounts": [
        {
          "name": "rentRefund",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "signer": true,
          "relations": [
            "cronJob"
          ]
        },
        {
          "name": "cronJob",
          "writable": true,
          "relations": [
            "cronJobTransaction"
          ]
        },
        {
          "name": "cronJobTransaction",
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
              "name": "removeCronTransactionArgsV0"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "cronJobNameMappingV0",
      "discriminator": [
        80,
        161,
        45,
        135,
        20,
        80,
        18,
        234
      ]
    },
    {
      "name": "cronJobTransactionV0",
      "discriminator": [
        117,
        255,
        57,
        94,
        180,
        229,
        113,
        39
      ]
    },
    {
      "name": "cronJobV0",
      "discriminator": [
        69,
        161,
        189,
        23,
        250,
        59,
        67,
        157
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
      "name": "userCronJobsV0",
      "discriminator": [
        62,
        38,
        165,
        254,
        98,
        211,
        89,
        60
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidSchedule",
      "msg": "Invalid schedule"
    },
    {
      "code": 6001,
      "name": "transactionAlreadyExists",
      "msg": "Transaction already exists"
    },
    {
      "code": 6002,
      "name": "insufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 6003,
      "name": "overflow",
      "msg": "overflow"
    },
    {
      "code": 6004,
      "name": "invalidDataIncrease",
      "msg": "Invalid data increase"
    },
    {
      "code": 6005,
      "name": "cronJobHasTransactions",
      "msg": "Cron job has transactions"
    },
    {
      "code": 6006,
      "name": "invalidNumTasksPerQueueCall",
      "msg": "Invalid number of tasks per queue call"
    }
  ],
  "types": [
    {
      "name": "addCronTransactionArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "transactionSource",
            "type": {
              "defined": {
                "name": "transactionSourceV0"
              }
            }
          }
        ]
      }
    },
    {
      "name": "compiledInstructionV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programIdIndex",
            "type": "u8"
          },
          {
            "name": "accounts",
            "type": "bytes"
          },
          {
            "name": "data",
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
      "name": "cronJobNameMappingV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cronJob",
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
      "name": "cronJobTransactionV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u32"
          },
          {
            "name": "cronJob",
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
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "cronJobV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u32"
          },
          {
            "name": "userCronJobs",
            "type": "pubkey"
          },
          {
            "name": "taskQueue",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "freeTasksPerTransaction",
            "type": "u8"
          },
          {
            "name": "numTasksPerQueueCall",
            "type": "u8"
          },
          {
            "name": "schedule",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "currentExecTs",
            "type": "i64"
          },
          {
            "name": "currentTransactionId",
            "type": "u32"
          },
          {
            "name": "numTransactions",
            "type": "u32"
          },
          {
            "name": "nextTransactionId",
            "type": "u32"
          },
          {
            "name": "removedFromQueue",
            "type": "bool"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "initializeCronJobArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "schedule",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "freeTasksPerTransaction",
            "type": "u8"
          },
          {
            "name": "numTasksPerQueueCall",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "removeCronTransactionArgsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u32"
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
            "name": "accounts",
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
      "name": "userCronJobsV0",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "minCronJobId",
            "type": "u32"
          },
          {
            "name": "nextCronJobId",
            "type": "u32"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
