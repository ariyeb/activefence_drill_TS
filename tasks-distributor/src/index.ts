import * as rabbitMqClient from './rabbitMQ/rabbitMQ.js';
import * as mongooseClient from './db/mongoose.js';
import { consumeTasksGroupsFromRabbitMQ } from './services/tasks.js';

try {
    await mongooseClient.connect();
    console.log('Tasks-distributor: connected to MongoDb');
    await rabbitMqClient.connect();
    consumeTasksGroupsFromRabbitMQ();
    console.log('Tasks-distributor connected');
} catch (err) {
    console.error(err);
}