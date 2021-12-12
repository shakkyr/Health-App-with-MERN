const express = require('express')
const router = express.Router();

const doctorController = require('../controllers/doctor.controller')

router.get('/:special',doctorController.getDoctor)

// router.get('/:cases',doctorController.getDoctor)

module.exports = router;