import { getMemoTransaction, keypair, taskQueuePda, tuktukProgram } from "../constants";
import { taskKey } from "@helium/tuktuk-sdk";
import { getExplorerLink } from "@solana-developers/helpers";
import { BN } from "@coral-xyz/anchor";

async function main() {
  const taskId = process.argv[2]; // change this for every new task

  const [taskPda] = taskKey(taskQueuePda, Number(taskId));

  const { transaction, remainingAccounts } = await getMemoTransaction(taskQueuePda);

  const sig = await tuktukProgram.methods
    .queueTaskV0({
      id: taskId,
      // trigger: { now: {} },
      trigger: { timestamp: [new BN(Date.now() / 1000 + 60)] },
      transaction: {
        compiledV0: [transaction],
      },
      crankReward: new BN(12500),
      description: 'Test memo task',
    })
    .accounts({
      payer: keypair.publicKey,
      queueAuthority: keypair.publicKey,
      taskQueue: taskQueuePda,
      task: taskPda,
    })
    .remainingAccounts(remainingAccounts)
    .signers([keypair])
    .rpc();

  console.log(getExplorerLink("tx", sig, "devnet"));
}

main();