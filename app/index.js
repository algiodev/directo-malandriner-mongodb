const express = require('express');
const app = express();

const { ENV, PORT } = require('./config');
const { connectDB, disconnectDB } = require('./config/mongo');
const errors = require('./errors');
const api = require('./routes');

app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', api);
app.use(errors.error404);
app.use(errors.errorHandler);
app.use(errors.errorResponse);

let server = app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`app listening port ${PORT} on ${ENV}`);
    } catch (error) {
        console.log('FAIL_STARTING_APP', error );
        closeApp(error);
    }
});

process
    .on('uncaughtException', (err) =>  console.log('UNCAUGHT_EXCEPTION', err ) )
    .on('unhandledRejection', (err, promise) => console.log('UNHANDLED_REJECTION', err, promise ));

function closeApp(error = '') {
    console.log('CLOSING APP', error);
    server.close(async () => {
        console.log('HTTP_SERVER_CLOSED');
        await disconnectDB();
        process.exit(0);
    });
}
