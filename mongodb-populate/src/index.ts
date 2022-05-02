import { populate } from './mongodb-populate.js';
import { connect, disconnect } from './mongoose.js';

try {
    await connect();
    await populate();
    await disconnect();
} catch (err) {
    console.error(err);
}