# Tuktuk Setup

Scripts for using [Tuktuk](https://github.com/helium/tuktuk), a permissionless crank from [Helium](https://www.helium.com/).

## Setup

1. Set up env values

```bash
cp .env.example .env
```

2. Generate keypairs for creating task queues and cron jobs

```bash
solana-keygen new -o wallet.json
solana-keygen new -o cranker.json
```

3. In a new terminal, start a crank turner process

```bash
bash scripts/start-cranker-turner.sh
```