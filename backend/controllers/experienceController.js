const asyncHandler = require("express-async-handler");

const Experience = require("../models/experienceModel");
const User = require("../models/userModel");

// @desc    Get/read/see experience
// @route   GET /api/experience
// @access  Private
const getExperiences = asyncHandler(async (req, res) => {
  const experiences = await Experience.find({ user: req.user.id });

  res.status(200).json(experiences);
});

// @desc    Set/create experience
// @route   POST /api/experience
// @access  Private
const setExperience = asyncHandler(async (req, res) => {
    const {jobTitle, companyName,location, jobDescription, startedAt, endedAt} = req.body
    if (!jobTitle || !companyName || !location || !jobDescription || !startedAt || !endedAt) {
        res.status(400)
        throw new Error('Please add all fields')
      }

  const experience = await Experience.create({
    jobTitle, 
    companyName,
    location, 
    jobDescription, 
    startedAt, 
    endedAt,
    user: req.user.id,
  });

  res.status(200).json(experience);

});

// @desc    Update experience
// @route   PUT /api/experiences/:id
// @access  Private
const updateExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.findById(req.params.id);

  if (!experience) {
    res.status(400);
    throw new Error("Experience not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the experience user
  if (experience.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedExperience);
});

// @desc    Delete experience
// @route   DELETE /api/experience/:id
// @access  Private
const deleteExperience = asyncHandler(async (req, res) => {
  const experience = await Education.findById(req.params.id);

  if (!experience) {
    res.status(400);
    throw new Error("Experience not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the experience user
  if (experience.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await experience.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getExperiences,
  setExperience,
  updateExperience,
  deleteExperience,
};
