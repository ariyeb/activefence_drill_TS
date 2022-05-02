import mongoose from "mongoose";
import { ITask } from "./ITask.js";

const taskSchema = new mongoose.Schema<ITask>({
    num1: Number,
    num2: Number,
    operation: String
});

const Task = mongoose.model('Task', taskSchema);

export { Task };