import { tuktukConfigPda, tuktukProgram } from "../constants";

const tuktukConfig = await tuktukProgram.account.tuktukConfigV0.fetch(tuktukConfigPda);

console.log(tuktukConfig);