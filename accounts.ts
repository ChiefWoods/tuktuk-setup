import { cronJobPda, cronProgram, tuktukConfigPda, tuktukProgram, userCronJobPda } from "./constants";

export async function getTuktukConfigAcc() {
  return await tuktukProgram.account.tuktukConfigV0.fetch(tuktukConfigPda);
}

export async function getUserCronJobAcc() {
  return await cronProgram.account.userCronJobsV0.fetchNullable(userCronJobPda);
}

export async function getCronJobAcc() {
  return await cronProgram.account.cronJobV0.fetch(cronJobPda);
}