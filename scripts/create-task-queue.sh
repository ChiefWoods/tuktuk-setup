source tuktuk-config.sh

tuktuk -u $TUKTUK_RPC_URL -w $TUKTUK_WALLET task-queue create \
--queue-authority $TUKTUK_WALLET_ADDRESS \
--update-authority $TUKTUK_WALLET_ADDRESS \
--capacity 5 \
--name woods-task-queue \
--funding-amount 1000000000 \
--min-crank-reward 12500 \
--stale-task-age 300