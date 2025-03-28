import type { PublicKey } from "@solana/web3.js";
import { tuktukProgram } from "./constants";

export async function getTaskQueue(taskQueuePda: PublicKey) {
  return await tuktukProgram.account.taskQueueV0.fetchNullable(taskQueuePda);
}