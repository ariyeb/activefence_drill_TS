import mongoose from "mongoose";

interface ITask {
    num1: number;
    num2: number;
    operation: string;
}

const taskSchema = new mongoose.Schema<ITask>({
    num1: Number,
    num2: Number,
    operation: String
});

const Task = mongoose.model('Task', taskSchema);

export { Task, ITask };