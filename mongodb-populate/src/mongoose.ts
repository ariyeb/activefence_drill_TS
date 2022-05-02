import mongoose from 'mongoose';
import { constants } from './constants.js';

async function connect() {
    return await mongoose.connect(constants.mongodbUrl);
}

async function disconnect() {
    await mongoose.disconnect();
}

export { connect, disconnect };