const mongoose = require('mongoose')

/* EducationSchema will correspond to a collection in your MongoDB database. */
const experienceSchema = new mongoose.Schema(
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
    jobTitle: {
      type: String,
      required: [true, "Please provide your job title."],
    },
    companyName: {
      type: String,
      required: [true, "Please provide company name "],
    },
    location: {
      type: String,
      required: [
        true,
        "Please enter location of your educational institution.",
      ],
    },
    jobDescription: {
      type: String,
      required: [true, "Please provide brief job description"],
    },
    startedAt: {
      type: String,
      required: [true, "Start of employment (month and a year)."],
    },
    endedAt: {
      type: String,
      required: [true, "End of employment (month and a year or Present)."],
    },
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Experience", experienceSchema);
