const express = require('express')
const router = express.Router()
const {getPersonal, setPersonal, updatePersonal, deletePersonal,} = require('../controllers/personalController')
const{protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getPersonal).post(protect, setPersonal)

router.route('/:id').put(protect, updatePersonal).delete(protect, deletePersonal)


module.exports = router