import express from 'express';
import { organizeTasksFromMongodbInRabbitmq } from '../services/tasks.js';

const router = express.Router();

router.patch('/execute', async (req, res) => {
    try {
        await organizeTasksFromMongodbInRabbitmq();
        console.log('PATCH /tasks/execute');
        res.status(202).send();
    } catch (err) {
        res.status(500).send();
    }
});

export { router };
