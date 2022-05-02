import express from 'express';
import * as mongooseClient from './db/mongoose.js';
import * as rabbitMqClient from './rabbitMQ/rabbitMQ.js';
import { router as tasksRouter } from './routers/tasks.js';
import { constants } from './constants.js';

const app = express();

app.use(express.json());
app.use('/tasks', tasksRouter);

try {
    await mongooseClient.connect();
    console.log('Tasks-organizer: Connection to MongoDb established');
    await rabbitMqClient.connect();
    console.log('Tasks-organizer: Connection to RabbitMQ established');
    await app.listen(constants.serverPort);
    console.log('Tasks-organizer connected on port:', constants.serverPort);
} catch (err) {
    console.error(err);
}