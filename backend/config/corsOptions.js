const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
    //3rd party middleware for looking up an object with an origin method and callback function. 
    //The !origin allow apps like Postman to access REST API
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    //access control credentials header
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 