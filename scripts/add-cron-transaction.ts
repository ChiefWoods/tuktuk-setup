import { getExplorerLink } from "@solana-developers/helpers";
import { cronJobPda, cronProgram, keypair, taskQueuePda } from "../constants";
import { cronJobTransactionKey } from "@helium/cron-sdk";
import { getTransaction } from "../transactions";
import { getCronJobAcc } from "../accounts";

async function main() {
  const cronJobAcc = await getCronJobAcc();
  const cronJobTransactionId = cronJobAcc.nextTransactionId;
  const [cronJobTransactionPda] = cronJobTransactionKey(cronJobPda, Number(cronJobTransactionId));

  const { transaction, remainingAccounts } = await getTransaction(taskQueuePda);

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