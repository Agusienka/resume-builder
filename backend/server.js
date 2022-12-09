const express = require("express");
const colors =  require('colors')
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const {errorHandler} = require ('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/educations', require('./routes/educationRoutes'))
app.use('/api/experiences', require('./routes/experienceRoutes'))
app.use('/api/extras', require('./routes/extraRoutes'))
app.use('/api/personals', require('./routes/personalRoutes'))
// app.use('/api/resume', require('./routes/resumeRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Yo Devs, I am listening here on ${port}!`));
