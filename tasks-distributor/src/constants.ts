export const constants: { [index: string]: string; } = {
    mongodbUrl: process.env.MONGODB_URL ?? "",
    rabbitMqUrl: process.env.RABBITMQ_URL ?? "",
    tasksGroupsQueue: 'tasksGroupsQueue',
    tasksQueue: 'tasksQueue'
};