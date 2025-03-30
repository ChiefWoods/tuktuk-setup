import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { Connection, Keypair } from "@solana/web3.js";
import type { Tuktuk } from "./types/tuktuk";
import { init, taskQueueKey, tuktukConfigKey } from "@helium/tuktuk-sdk";
import { cronJobKey, init as initCron, userCronJobsKey } from "@helium/cron-sdk";
import type { Cron } from "./types/cron";
import { getTuktukConfigAcc, getUserCronJobAcc } from "./accounts";

const connection = new Connection(process.env.SOLANA_RPC_URL!, "processed");
export const keypair = Keypair.fromSecretKey(new Uint8Array(await Bun.file('wallet.json').json()));
const provider = new AnchorProvider(connection, new Wallet(keypair));

export const tuktukProgram: Program<Tuktuk> = await init(provider);
export const cronProgram: Program<Cron> = await initCron(provider);

export const [tuktukConfigPda] = tuktukConfigKey();

const taskQueueId = (await getTuktukConfigAcc()).nextTaskQueueId;
export const [taskQueuePda] = taskQueueKey(tuktukConfigPda, Number(taskQueueId));

export const [userCronJobPda] = userCronJobsKey(keypair.publicKey);

const cronJobId = (await getUserCronJobAcc())?.nextCronJobId ?? 0;
export const [cronJobPda] = cronJobKey(keypair.publicKey, Number(cronJobId));
