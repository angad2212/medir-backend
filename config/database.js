const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, //modern MongoDB server
        });

        console.log('Connected to MongoDB database');
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

//calling the function to connect to database
connectDB();

module.exports = mongoose;
