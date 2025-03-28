TASK_QUEUE_CAPACITY=5

for i in $(seq 0 $((TASK_QUEUE_CAPACITY - 1))); do
    zsh scripts/close-task.sh "$i"
done