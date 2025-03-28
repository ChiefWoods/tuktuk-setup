source tuktuk-config.sh

tuktuk -u $TUKTUK_RPC_URL -w $TUKTUK_WALLET task-queue update \
--task-queue-id $TASK_QUEUE_ID \
--min-crank-reward 12500 \
--capacity 5 \
--stale-task-age 3600