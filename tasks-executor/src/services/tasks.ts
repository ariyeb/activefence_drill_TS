import amqplib from 'amqplib';
import { constants } from '../constants.js';
import { ITask } from '../models/ITask.js';
import * as rabbitMqClient from '../rabbitMQ/rabbitMQ.js';

function handleTaskFromRabbitMq(taskMessage: amqplib.ConsumeMessage | null) {
    if (!taskMessage) throw new Error('taskMessage is null');
    const taskJSON = taskMessage.content.toString();
    const task: ITask = JSON.parse(taskMessage.content.toString());
    console.log(`tasks-executor: ${task.num1} ${task.operation} ${task.num2} = ${getTaskResult(task)}`);
    rabbitMqClient.acknowledgment(taskMessage);
    console.log('task ack:', taskJSON);
}

function consumeTasksFromRabbitmq() {
    rabbitMqClient.consume(constants.tasksQueue, handleTaskFromRabbitMq);
}

function getTaskResult(task: ITask) {
    switch (task.operation) {
        case "+":
            return task.num1 + task.num2;
        case "-":
            return task.num1 - task.num2;
        case "*":
            return task.num1 * task.num2;
        case "/":
            return task.num1 / task.num2;
    }
}

export { consumeTasksFromRabbitmq };