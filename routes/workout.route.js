const express = require('express')
const router = express.Router();
const workoutController = require('../controllers/workout.controller');
const { authenticateJWT } = require('../middlware/authenticator');

router.post('/',authenticateJWT, workoutController.create)

router.get('/:id',workoutController.getWorkout)

module.exports = router;