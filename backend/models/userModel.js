const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
    firstName: {
        type: String,
        required: [true, "Please add first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please add last name"]
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
    phone: {
        type: String,
        required: [true, "Please add phone number"]
    }
},
{
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)