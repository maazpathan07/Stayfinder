const mongoose = require('mongoose');
const app = require('./src/app.js');
const connectDatabase = require('./src/config/database.js');

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDatabase();
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Unable to start the server:', err);
        await mongoose.disconnect();
        process.exitCode = 1;
    }
}

startServer();
