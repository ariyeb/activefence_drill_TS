import { populate } from './mongodb-populate.js';
import { connect, disconnect } from './mongoose.js';

try {
    await connect();
    await populate();
    await disconnect();
    console.log('Mongodb was populated with 100,000 new tasks');
} catch (err) {
    console.error(err);
}