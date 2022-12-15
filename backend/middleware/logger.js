//to format dates
const { format } = require('date-fns')
// A Universally Unique IDentifier (UUID) URN Namespace
const { v4: uuid } = require('uuid')
// fs is The built-in Node. js file system module helps us store, access, and manage data on our operating system. 
//Commonly used features of the fs module include fs. readFile to read data from a file, fs. writeFile to write data to a file and replace the file if it already exists
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const { MongoClient, Logger } = require("mongodb");


const logEvents = async (message, logFileName) => {
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

//error checking for directories, either already there or must be created
try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
        await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
    }
    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
} catch (err) {
    console.log(err)
}
}

//actual middleware. Node.js logging is an important part of supporting the complete application life cycle. From creation to debugging to planning new features, logs support us all the way. Logs every request that comes in
const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}

// Replace the following with your MongoDB deployment's connection string.
const uri =
  'mongodb+srv://agamoe:agusienka@resumebuilder.3wkim2j.mongodb.net/resumeBuilder?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function main(client) {
  // Set debug level
  logger.setLevel("debug");
  const db = client.db("resumeBuilder");
  // Run a sample command to produce logger messages
  await db.command({ hello: 1 });
}

module.exports = { logEvents, logger }