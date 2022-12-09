const express = require('express')
const router = express.Router()
const {getExtras, setExtra, updateExtra, deleteExtra} = require('../controllers/extraController')
const{protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getExtras).post(protect, setExtra)

router.route('/:id').put(protect, updateExtra).delete(protect, deleteExtra)


module.exports = router