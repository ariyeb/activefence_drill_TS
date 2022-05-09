import amqplib from 'amqplib';
import { constants } from "../constants.js";
import { Task } from "../models/task.js";
import * as rabbitMqClient from "../rabbitMQ/rabbitMQ.js";

async function handleTasksGroupFromRabbitMQ(tasksGroupMessage: amqplib.ConsumeMessage | null) {
    try {
        if (!tasksGroupMessage) throw new Error("tasksGroupMessage is null");
        const message = tasksGroupMessage.content.toString();
        console.log('tasksGroup - start:', message);
        const taskGroup = JSON.parse(message);

        const tasks = await Task.find(
            {},
            null,
            { skip: taskGroup.skip, limit: taskGroup.limit }
        );

        tasks.forEach((task) => {
            rabbitMqClient.publish(constants.tasksQueue, JSON.stringify(task));
        });
        rabbitMqClient.acknowledgment(tasksGroupMessage);
        console.log('tasksGroup - ack:', message);

    } catch (err) {
        console.error(err);
    }
}

function consumeTasksGroupsFromRabbitMQ() {
    rabbitMqClient.consume(constants.tasksGroupsQueue, handleTasksGroupFromRabbitMQ);
}

export { consumeTasksGroupsFromRabbitMQ };