const express = require('express')
const router = express.Router()
const {getExperience, setExperience, updateExperience, deleteExperience,} = require('../controllers/educationController')
const{protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getExperience).post(protect, setExperience)

router.route('/:id').put(protect, updateExperience).delete(protect, deleteExperience)


module.exports = router