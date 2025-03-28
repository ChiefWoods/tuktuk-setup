source tuktuk-config.sh

TASK_ID=$1

tuktuk -u $TUKTUK_RPC_URL -w $TUKTUK_WALLET task close --task-queue-id $TASK_QUEUE_ID -i $TASK_ID