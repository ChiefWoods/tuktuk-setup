source tuktuk-config.sh

tuktuk -u $TUKTUK_RPC_URL -w $TUKTUK_WALLET task-queue remove-queue-authority --task-queue-id $TASK_QUEUE_ID --queue-authority $(solana address -k wallet.json)