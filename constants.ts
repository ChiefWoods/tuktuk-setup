import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { Connection, Keypair, PublicKey, TransactionInstruction } from "@solana/web3.js";
import type { Tuktuk } from "./types/tuktuk";
import { compileTransaction, customSignerKey, init, taskQueueKey, tuktukConfigKey } from "@helium/tuktuk-sdk";
import { cronJobKey, init as initCron } from "@helium/cron-sdk";
import type { Cron } from "./types/cron";

const connection = new Connection(process.env.SOLANA_RPC_URL!, "processed");
export const keypair = Keypair.fromSecretKey(new Uint8Array(await Bun.file('wallet.json').json()));
const provider = new AnchorProvider(connection, new Wallet(keypair));

export const tuktukProgram: Program<Tuktuk> = await init(provider);
export const cronProgram: Program<Cron> = await initCron(provider);
export const [tuktukConfigPda] = tuktukConfigKey();

const taskQueueId = 4;
export const [taskQueuePda] = taskQueueKey(tuktukConfigPda, taskQueueId);

const cronJobId = 0;
export const [cronJobPda] = cronJobKey(keypair.publicKey, cronJobId);

export async function getMemoTransaction(taskQueuePda: PublicKey) {
  const [wallet, bump] = customSignerKey(taskQueuePda, [Buffer.from('custom')]);
  console.log('Custom signer key:', wallet.toBase58());
  const bumpBuffer = Buffer.alloc(1);
  bumpBuffer.writeUInt8(bump);

  const ixs: TransactionInstruction[] = [
    new TransactionInstruction(
      {
        keys: [
          {
            pubkey: wallet,
            isSigner: true,
            isWritable: true,
          }
        ],
        programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
        data: Buffer.from(`Hello there!`),
      }
    )
  ];

  return await compileTransaction(
    ixs,
    [[Buffer.from('custom'), bumpBuffer]],
  );
}