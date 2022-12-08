import mongoose from 'mongoose';

/* EducationSchema will correspond to a collection in your MongoDB database. */
const EducationSchema = mongoose.Schema(
  {
    resume: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resume',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true, 
    },
    degree: {
        type: String,
        required: [true, "Please provide degree (if applicable)."],
      },
    degreeMajor: {
        type: String,
        required: [true, "Please provide field of study or degree major "]
      },
    schoolName: {
      type: String,
      required: [true, 'Please provide the name of the school.'],
    },
    location: {
        type: String,
        required: [true, 'Please enter location of your educational institution.'],
      },
    startedAt: {
      type: String,
      required: [true, 'Please specify the start date of your experience'],
    },
    endedAt: {
      type: String,
      required: [true, 'Please specify the end date of your experience.'],
    },
   
  },
  {
    timestamps: true,
  },
);

educationSchema.methods.formatDate = function(dateProperty) {
    const newDate = new Date(this[dateProperty]);
    let formattedDate = `${ newDate.getFullYear() }-`;
        formattedDate += `${ `0${ newDate.getMonth() + 1 }`.slice(-2) }-`;  // for double digit month
        // formattedDate += `${ `0${ newDate.getDate() }`.slice(-2) }`;        // for double digit day
    return formattedDate;
}

module.exports = mongoose.model('Education', EducationSchema);