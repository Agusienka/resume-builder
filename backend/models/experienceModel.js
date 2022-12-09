import mongoose from "mongoose";

/* EducationSchema will correspond to a collection in your MongoDB database. */
const experienceSchema = mongoose.Schema(
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
      type: Date,
      required: [true, "Start of employment (month and a year)."],
    },
    endedAt: {
      type: Date,
      required: [true, "End of employment (month and a year or Present)."],
    },
  },
  {
    timestamps: true,
  }
);

// Returns a date in 'yyyy-MM-dd' format
experienceSchema.methods.formatDate = function (dateProperty) {
  const newDate = new Date(this[dateProperty]);
  let formattedDate = `${newDate.getFullYear()}-`;
  formattedDate += `${`0${newDate.getMonth() + 1}`.slice(-2)}-`; // for double digit month
  // formattedDate += `${ `0${ newDate.getDate() }`.slice(-2) }`;        // for double digit day
  return formattedDate;
};

module.exports = mongoose.model("Experience", experienceSchema);
