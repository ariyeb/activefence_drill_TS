import { getRandomNumber, getRandomOperation } from './random.js';
import { ITask, Task } from './task-model.js';

async function populate() {
    const tasks: ITask[] = [];
    for (let i = 0; i < 100_000; i++) {
        const newTask = new Task();
        newTask.num1 = getRandomNumber(1, 10);
        newTask.num2 = getRandomNumber(1, 10);
        newTask.operation = getRandomOperation();
        tasks.push(newTask);
    }
    const res = await Task.insertMany(tasks);
}

export { populate };