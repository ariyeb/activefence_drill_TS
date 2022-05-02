import amqplib from 'amqplib';
import { constants } from '../constants.js';

let connection = null;
let channel: amqplib.Channel | null = null;

async function connect() {
    connection = await amqplib.connect(constants.rabbitMqUrl);
    channel = await connection.createChannel();
    await channel.assertQueue(constants.tasksQueue);
}

function consume(queue: string, callback: (message: amqplib.ConsumeMessage | null) => void) {
    if (channel)
        channel.consume(queue, callback, { noAck: false });
}

function acknowledgment(message: amqplib.Message) {
    if (channel)
        channel.ack(message);
}

export {
    connect,
    consume,
    acknowledgment
};