const mongoose = require("mongoose");
require('dotenv').config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB database');
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

//calling the function to connect to database
connectDB();

module.exports = mongoose;
