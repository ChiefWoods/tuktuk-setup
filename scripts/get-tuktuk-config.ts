import { getTuktukConfigAcc } from "../accounts"

const tuktukConfigAcc = await getTuktukConfigAcc();

console.log('Next available task queue id:', tuktukConfigAcc.nextTaskQueueId);