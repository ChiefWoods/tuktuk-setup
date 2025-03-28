source tuktuk-config.sh

tuktuk -u $TUKTUK_RPC_URL -w $TUKTUK_WALLET cron create \
--authority $TUKTUK_WALLET_ADDRESS \
--task-queue-id $TASK_QUEUE_ID \
--schedule "0 * * * * *" \
--name "woods-cron" \
--free-tasks-per-transaction 1 \
--num-tasks-per-queue-call 1 \
--funding-amount 1000000000