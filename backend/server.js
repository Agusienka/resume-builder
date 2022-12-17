const express = require("express");
const colors =  require('colors')
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const {errorHandler} = require ('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require("cors");


connectDB()

const app = express();

var corsOptions = {
  origin: '*',
  methods: 'GET,POST,PUT,HEAD,DELETE,PATCH',
  preflightContinue: true,
  optionSuccessStatus: 204
}

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/educations', require('./routes/educationRoutes'))
app.use('/api/experiences', require('./routes/experienceRoutes'))
app.use('/api/extras', require('./routes/extraRoutes'))
app.use('/api/personals', require('./routes/personalRoutes'))

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
// app.use('/api/resume', require('./routes/resumeRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Yo Devs, I am listening here on ${port}!`));


