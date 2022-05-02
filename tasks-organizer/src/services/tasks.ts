import { constants } from "../constants.js";
import { Task } from "../models/task.js";
import { TasksGroup } from "../models/tasks-group.js";
import * as rabbitMqClient from "../rabbitMQ/rabbitMQ.js";

async function organizeTasksFromMongodbInRabbitmq(): Promise<void> {
    try {
        const tasksCount = await Task.estimatedDocumentCount();
        const tasksGroupsCount = Math.ceil(tasksCount / 100);
        for (let i = 0; i < tasksGroupsCount; i++) {
            const newTasksGroup = new TasksGroup(i * 100, 100);
            rabbitMqClient.publish(constants.tasksGroupsQueue, newTasksGroup.toString());
        }
    } catch (err) {
        console.error(err);
    }
}

export { organizeTasksFromMongodbInRabbitmq };