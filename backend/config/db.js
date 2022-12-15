const mongoose = require('mongoose')


mongoose.set('strictQuery', false);


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,
            {useUnifiedTopology: true,
            useNewUrlParser:true })
        
          


        console.log(`MongoDB connected: ${conn.connection.host}`.yellow.underline);
    } catch (error) {
        console.log(error, "Cannot connect to the database");
        process.exit(1)
    }
}

module.exports = connectDB