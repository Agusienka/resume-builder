const asyncHandler = require("express-async-handler");

const Education = require("../models/educationModel");
const User = require("../models/userModel");

// @desc    Get/read/see education
// @route   GET /api/education
// @access  Private
const getEducation = asyncHandler(async (req, res) => {
  const educations = await Education.find({ user: req.user.id });

  res.status(200).json(educations);
});

// @desc    Set/create education
// @route   POST /api/education
// @access  Private
const setEducation = asyncHandler(async (req, res) => {
    const {degree, degreeMajor, schoolName, location, startedAt, endedAt} = req.body
    if (!degree || !degreeMajor || !schoolName || !location || !startedAt || !endedAt) {
        res.status(400)
        throw new Error('Please add all fields')
      }

  const education = await Education.create({
    degree, 
    degreeMajor, 
    schoolName, 
    location, 
    startedAt, 
    endedAt,
    user: req.user.id,
  });

  res.status(200).json(education);
});

// @desc    Update education
// @route   PUT /api/education/:id
// @access  Private
const updateEducation = asyncHandler(async (req, res) => {
  const education = await Education.findById(req.params.id);

  if (!education) {
    res.status(400);
    throw new Error("Education not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the education user
  if (education.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedEducation);
});

// @desc    Delete education
// @route   DELETE /api/education/:id
// @access  Private
const deleteEducation = asyncHandler(async (req, res) => {
  const education = await Education.findById(req.params.id);

  if (!education) {
    res.status(400);
    throw new Error("Education not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the education user
  if (education.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await education.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getEducation,
  setEducation,
  updateEducation,
  deleteEducation,
};
