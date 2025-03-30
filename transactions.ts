import { compileTransaction, customSignerKey } from "@helium/tuktuk-sdk";
import { TransactionInstruction, PublicKey } from "@solana/web3.js";

export async function getTransaction(taskQueuePda: PublicKey) {
  const [wallet, bump] = customSignerKey(taskQueuePda, [Buffer.from('custom')]);
  console.log('Custom signer key:', wallet.toBase58());
  const bumpBuffer = Buffer.alloc(1);
  bumpBuffer.writeUInt8(bump);

  // change this to your custom transaction
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