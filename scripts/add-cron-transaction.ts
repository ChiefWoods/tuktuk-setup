import { getExplorerLink } from "@solana-developers/helpers";
import { cronJobPda, cronProgram, getMemoTransaction, keypair, taskQueuePda } from "../constants";
import { cronJobTransactionKey } from "@helium/cron-sdk";

async function main() {
  const cronJobAcc = await cronProgram.account.cronJobV0.fetch(cronJobPda);
  const cronJobTransactionId = cronJobAcc.nextTransactionId;
  const [cronJobTransactionPda] = cronJobTransactionKey(cronJobPda, Number(cronJobTransactionId));

  const { transaction, remainingAccounts } = await getMemoTransaction(taskQueuePda);

  const sig = await cronProgram.methods
    .addCronTransactionV0({
      index: cronJobTransactionId,
      transactionSource: {
        compiledV0: [transaction],
      }
    })
    .accounts({
      payer: keypair.publicKey,
      cronJob: cronJobPda,
      cronJobTransaction: cronJobTransactionPda,
    })
    .remainingAccounts(remainingAccounts)
    .signers([keypair])
    .rpc();

  console.log(getExplorerLink('tx', sig, 'devnet'));
}

main();