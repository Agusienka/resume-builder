const express = require('express')
const router = express.Router()
const {getPersonals, setPersonal, updatePersonal, deletePersonal} = require('../controllers/personalController')
const{protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getPersonals).post(protect, setPersonal)

router.route('/:id').put(protect, updatePersonal).delete(protect, deletePersonal)


module.exports = router