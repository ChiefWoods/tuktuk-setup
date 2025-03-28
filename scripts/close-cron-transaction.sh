source tuktuk-config.sh

ID=$1

tuktuk -u $TUKTUK_RPC_URL -w $TUKTUK_WALLET cron-transaction close --cron-id $CRON_ID --id $ID