import * as rabbitMqClient from './rabbitMQ/rabbitMQ.js';
import { consumeTasksFromRabbitmq } from './services/tasks.js';

try {
    await rabbitMqClient.connect();
    console.log('Tasks-executer connected');
    consumeTasksFromRabbitmq();
} catch (err) {
    console.error(err);
}