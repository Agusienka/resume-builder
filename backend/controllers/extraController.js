const asyncHandler = require("express-async-handler");

const Extra = require("../models/extraModel");
const User = require("../models/userModel");

// @desc    Get/read/see extras
// @route   GET /api/extras
// @access  Private
const getExtra = asyncHandler(async (req, res) => {
  const extras = await Extra.find({ user: req.user.id });

  res.status(200).json(extras);
});

// @desc    Set/create extras
// @route   POST /api/extra
// @access  Private
const setExtra = asyncHandler(async (req, res) => {
    const {gpa, academicHonors, courseWork} = req.body
    if (!gpa || !academicHonors || !courseWork ) {
        res.status(400)
        throw new Error('Please add all fields')
      }

  const extra = await Extra.create({
    gpa, 
    academicHonors, 
    courseWork,
    user: req.user.id,
  });

  res.status(200).json(extra);

});

// @desc    Update extra
// @route   PUT /api/extra/:id
// @access  Private
const updateExtra = asyncHandler(async (req, res) => {
  const extra = await Extra.findById(req.params.id);

  if (!extra) {
    res.status(400);
    throw new Error("Additional relevant info not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the extras user
  if (extra.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedExtra = await Extra.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedExtra);
});

// @desc    Delete extra
// @route   DELETE /api/extra/:id
// @access  Private
const deleteExtra = asyncHandler(async (req, res) => {
  const extra = await Extra.findById(req.params.id);

  if (!extra) {
    res.status(400);
    throw new Error("Additional info not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the extra user
  if (extra.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await extra.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getExtra,
  setExtra,
  updateExtra,
  deleteExtra,
};
