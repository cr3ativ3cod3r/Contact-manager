const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017/test"
        );

        mongoose.connection.once('open', () => {
            console.log("Connected to mongo database");
        });
        
    } catch (error) {
        console.log(error);
        process.exit(1); //exit with code 1
    }
}

module.exports = connectdb;