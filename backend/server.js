require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const colors =  require('colors')
const dotenv = require("dotenv").config();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const port = process.env.PORT || 5000;
const {errorHandler} = require ('./middleware/errorMiddleware')
const { logger, logEvents } = require("./middleware/logger");
const connectDB = require('./config/db')

console.log(process.env.NODE_ENV);

connectDB();

app.use(logger);
//as if creating a public API which will be secured later (cors)
app.use(cors(corsOptions));
// to use and parse APP jason data
app.use(express.json());
//3rd party middleware
app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/educations', require('./routes/educationRoutes'))
app.use('/api/experiences', require('./routes/experienceRoutes'))
app.use('/api/extras', require('./routes/extraRoutes'))
app.use('/api/personals', require('./routes/personalRoutes'))

app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
      res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
      res.json({ message: "404 Not Found" });
    } else {
      res.type("txt").send("404 Not Found");
    }
  });

app.use(errorHandler)

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB but refuses to record error logs...");
    app.listen(port, () => console.log(`Yo Devs, I am listening here on ${port}!`));
  });
  
  mongoose.connection.on("error", (err) => {
    console.log(err);
    logEvents(
      `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
      "mongoErrLog.log"
    );
    console.log(process.env.MONGO_URI);
  });
  


