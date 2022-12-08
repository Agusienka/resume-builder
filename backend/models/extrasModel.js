import mongoose from "mongoose";

/* EducationSchema will correspond to a collection in your MongoDB database. */
const extrasSchema =  mongoose.Schema(
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
    gpa: {
      type: String,
      required: [false, "Please provide your GPA "],
    },
    academicHonors: {
      type: String,
      required: [false, "Please provide relevant academic honors "],
    },
    coursework: {
        type: String,
        required: [false, "Please provide relevant coursework."],
    },
  },
  {
    timestamps: true,
  },
);


module.exports = mongoose.model("Extras", extrasSchema);
