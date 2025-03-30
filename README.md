# Tuktuk Crank Setup

Scripts for using [Tuktuk](https://github.com/helium/tuktuk), a permissionless crank from [Helium](https://www.helium.com/).

## How It Works

Task queues can be created to hold tasks which can be manually or automatically executed when the trigger timestamp is reached. Crons are used to automatically queue tasks at a predefined cron schedule. Crank turners listen to task queues and execute a task when the trigger timestamp is reached.

To queue tasks to be triggered right away or at a future timestamp, you'll need to create a task queue. To have tasks automatically queued and executed at predefined intervals, you'll need to create a cron. By default, the cron does not have any transactions to queue at every schedule cycle, so you'll need to add a cron transaction.

Cron jobs will queue tasks indefinitely until it runs out of SOL. 

You can rely on other crank turners in the cluster or optionally operate your own, which will execute any tasks that meets the minimum crank fee requirement.

## Setup

### Prerequisites

Update your Bun and Rust toolkit, and install Tuktuk CLI.

```bash
bun upgrade
rustup update
cargo install tuktuk-cli
```

### Custom Transactions

Edit and add transactions in `transactions.ts`.

### Task Queue and Cron Job

1. Generate a funded keypair that will be set as payer and authority of task queues and cron jobs.

```bash
solana-keygen new -o wallet.json
solana airdrop 1 $(solana address -k wallet.json)
```

2. Get the next available task queue ID

```bash
bun run scripts/get-tuktuk-config.ts
```

3. Set up env values

```bash
cp .env.example .env
```

4. Edit the arguments in `create-task-queue.sh` and create a task queue

```bash
bash scripts/create-task-queue.sh
```

5. Edit `TASK_QUEUE_ID` in `tuktuk-config.sh`

6. Edit the arguments in `create-cron.sh` and create a cron job

```bash
bash scripts/create-cron.sh
```

7. Edit `CRON_ID` in `tuktuk-config.sh`

8. Add a cron transaction to your cron

```bash
bun run scripts/add-cron-transaction.ts
```

9. Monitor and top-up your task queue and cron job with SOL when required

```bash
bash scripts/get-task-queue.sh
bash scripts/list-cron.sh
```

### Manually Queuing Tasks

A task queue must have already been created.

```bash
bun run scripts/add-task.ts
```

### Running a Crank Turner

1. Install Tuktuk Crank Turner

```bash
cargo install tuktuk-crank-turner
```

2. Generate another funded keypair will be set as crank turner that receives crank rewards

```bash
solana-keygen new -o cranker.json;
solana airdrop 1 $(solana address -k cranker.json)
```

3. In another terminal, start a crank turner process

```bash
bash scripts/start-cranker-turner.sh
```

4. Your crank turner will start listening for tasks and execute them when ready. You may need to restart the crank turner occasionally on errors