const mongoose = require('mongoose');
const { MONGODB, ENV } = require('./index');

let URI = (ENV === 'development' ? MONGODB.LOCAL_CONNECTION : MONGODB.ATLAS_CONNECTION);

mongoose.connection
    .on('error', (err) => {
        console.log('DB_MONGO_ERROR', err);
    })
    .on('connected', () => {
        console.log('DB_MONGO_CONNECTED' );
    })
    .on('disconnected', () => {
        console.log('DB_MONGO_DISCONNECTED' );
    });

async function connectDB() {
    try {
        await mongoose.connect(URI);
    } catch (error) {
        console.log('DB_MONGO_ERROR', error);
    }
}

async function disconnectDB() {
    try {
        await mongoose.connection.close(false);
    } catch (error) {
        console.log('DB_MONGO_ERROR', error);
    }
}

module.exports = { connectDB, disconnectDB };
