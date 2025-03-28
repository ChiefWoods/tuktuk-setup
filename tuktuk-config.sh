export TUKTUK_RPC_URL="https://api.devnet.solana.com"
export TUKTUK_WALLET="wallet.json"
export TUKTUK_WALLET_ADDRESS=$(solana address -k $TUKTUK_WALLET)
export TASK_QUEUE_ID=4
export CRON_ID=0