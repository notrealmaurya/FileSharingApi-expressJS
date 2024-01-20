const mongoose = require('mongoose');
const File = require('./models/fileModel');
const fs = require('fs');
const dotenv = require("dotenv").config();

async function cleanup() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URL);

        // Get all records older than 24 hours 
        const files = await File.find({ createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } });

        if (files.length > 0) {
            for (const file of files) {
                try {
                    // Delete file from the file system
                    fs.unlinkSync(file.path);

                    // Remove file record from the database
                    await file.remove();

                    console.log(`Successfully deleted ${file.filename}`);
                } catch (err) {
                    console.error(`Error while deleting file ${file.filename}: ${err}`);
                }
            }
        }

        console.log('Job done!');
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    } finally {
        // Close the MongoDB connection
        await mongoose.disconnect();
    }
}

cleanup().then(() => process.exit());
