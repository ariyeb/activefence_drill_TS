import mongoose from 'mongoose';
import { constants } from '../constants.js';

async function connect() {
    await mongoose.connect(constants.mongodbUrl);
}

export { connect };