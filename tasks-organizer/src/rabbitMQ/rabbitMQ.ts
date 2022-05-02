import amqplib from 'amqplib';
import { constants } from '../constants.js';

let connection = null;
let channel: amqplib.Channel | null = null;

async function connect() {
    connection = await amqplib.connect(constants.rabbitMqUrl);
    channel = await connection.createChannel();
    await channel.assertQueue(constants.tasksGroupsQueue);
}

async function publish(queue: string, message: string) {
    if (channel)
        await channel.sendToQueue(queue, Buffer.from(message));
}

export {
    connect,
    publish
};