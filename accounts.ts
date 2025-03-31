import { cronJobPda, cronProgram, tuktukConfigPda, tuktukProgram } from "./constants";

export async function getTuktukConfigAcc() {
  return await tuktukProgram.account.tuktukConfigV0.fetch(tuktukConfigPda);
}

export async function getCronJobAcc() {
  return await cronProgram.account.cronJobV0.fetch(cronJobPda);
}