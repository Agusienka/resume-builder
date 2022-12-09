const mongoose = require('mongoose')

const personalSchema = mongoose.Schema(
  {
    resume: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    country: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: [true, "Please enter name of the state"],
    },
    city: {
      type: String,
      required: [true, "Please enter name of the city"],
    },
    street: {
      type: String,
      required: false,
    },
    houseNumber: {
      type: String,
      required: false,
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
    twitter: {
      type: String,
      required: [false, "Please paste a link to your Twitter account"],
      unique: true,
    },
    facebook: {
      type: String,
      required: [false, "Please paste a link to your Facebook account"],
      unique: true,
    },
    instagram: {
      type: String,
      required: [false, "Please paste a link to your Instagram account"],
      unique: true,
    },
    youTube: {
      type: String,
      required: [
        false,
        "Please paste a link to your relevant Youtube content ",
      ],
      unique: true,
    },
  },

  {
    timestamps: true,
  }
);

contactSchema.path("linkedIn", "gitHub", "youTube", "facebook", "instagram", "twitter").validate((val) => {
  urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");

module.exports = mongoose.model("Personal", personalSchema);
