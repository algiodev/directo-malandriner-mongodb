const dotenv = require('dotenv');
const envFound = dotenv.config();

if (envFound.error) {
    console.log('⚠️  Error: Couldn\'t find .env file  ⚠️');
    process.exit(1);
}

const config = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT,
    MONGODB: {
        LOCAL_CONNECTION: process.env.MONGODB_LOCAL_CONNECTION_STRING,
        ATLAS_CONNECTION: process.env.MONGODB_ATLAS_CONNECTION_STRING,
    },
    EMAIL: {}
};

module.exports = config;
