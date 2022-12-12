const mongoose = require('mongoose')

const personalSchema = new mongoose.Schema(
  {
    resume: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    state: {
      type: String,
      required: [true, "Please enter name of the state"],
    },
    city: {
      type: String,
      required: [true, "Please enter name of the city"],
    },
    linkedIn: {
      type: String,
      required: [true, "Please paste a link to your LinkedIn account"],
      unique: true,
    },
    gitHub: {
      type: String,
      required: [false, "Please paste a link to your GitHub account"],
      unique: true,
    },
  },

  {
    timestamps: true,
  }
);

// personalSchema.path("linkedIn", "gitHub", "youTube", "facebook", "instagram", "twitter").validate((val) => {
//   urlRegex =
//     /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
//   return urlRegex.test(val);
// }, "Invalid URL.");

module.exports = mongoose.model('Personal', personalSchema);
