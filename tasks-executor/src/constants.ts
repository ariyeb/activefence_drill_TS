export const constants: { [index: string]: string; } = {
    rabbitMqUrl: process.env.RABBITMQ_URL ?? "",
    tasksQueue: 'tasksQueue'
};