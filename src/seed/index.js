const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');
const connectDatabase = require('../config/database.js');

async function initDB() {
    try {
        await connectDatabase();
        console.log('Database connection successful');

        const listings = Array.isArray(initData) ? initData : initData.data;

        if (!Array.isArray(listings)) {
            throw new Error('Invalid data export in data.js');
        }

        await Listing.deleteMany({});
        await Listing.insertMany(
            listings.map(listing => ({
                ...listing,
                image: typeof listing.image === 'object'
                    ? listing.image.url
                    : listing.image
            }))
        );

        console.log('Database initialized with sample data');
    } catch (err) {
        console.error('Initialization failed:', err);
        process.exitCode = 1;
    } finally {
        await mongoose.connection.close();
    }
}

initDB();