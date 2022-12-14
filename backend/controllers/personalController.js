const asyncHandler = require("express-async-handler");

const Personal = require("../models/personalModel");
const User = require("../models/userModel");

// @desc    Get/read/see personal
// @route   GET /api/personal
// @access  Private
const getPersonals = asyncHandler(async (req, res) => {
  const personals = await Personal.find({ user: req.user.id });

  res.status(200).json(personals);
});

// @desc    Set/create personal
// @route   POST /api/personal
// @access  Private
const setPersonal = asyncHandler(async (req, res) => {
    const {state, city, linkedIn, gitHub} = req.body
    if (!state || !city || !linkedIn || !gitHub ) {
        res.status(400)
        throw new Error('Please add all fields')
      }

  const personal = await Personal.create({
    state, 
    city, 
    linkedIn, 
    gitHub, 
    user: req.user.id,
  });

  res.status(200).json(personal);
});

// @desc    Update personal
// @route   PUT /api/personal/:id
// @access  Private
const updatePersonal = asyncHandler(async (req, res) => {
  const personal = await Personal.findById(req.params.id);

  if (!personal) {
    res.status(400);
    throw new Error("Personal info not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the personal user
  if (personal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedPersonal = await Personal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPersonal);
});

// @desc    Delete personal
// @route   DELETE /api/personal/:id
// @access  Private
const deletePersonal = asyncHandler(async (req, res) => {
  const personal = await Personal.findById(req.params.id);

  if (!personal) {
    res.status(400);
    throw new Error("Personal info not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the personal user
  if (personal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await personal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPersonals,
  setPersonal,
  updatePersonal,
  deletePersonal,
};
