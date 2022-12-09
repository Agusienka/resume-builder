const express = require('express')
const router = express.Router()
const {getEducations, setEducation, updateEducation, deleteEducation, getEducations} = require('../controllers/educationController')
const{protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getEducations).post(protect, setEducation)

router.route('/:id').put(protect, updateEducation).delete(protect, deleteEducation)


module.exports = router