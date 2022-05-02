export const constants: { [index: string]: string; } = {
    mongodbUrl: process.env.MONGODB_URL ?? "",
    rabbitMqUrl: process.env.RABBITMQ_URL ?? "",
    serverPort: process.env.PORT ?? "",
    tasksGroupsQueue: 'tasksGroupsQueue'
};