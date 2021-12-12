const express = require('express')
const router = express.Router();
const sleepingController = require('../controllers/sleeping.controller');
const { authenticateJWT } = require('../middlware/authenticator');

router.post('/',authenticateJWT, sleepingController.create)

router.get('/:id',sleepingController.getSleeping)

module.exports = router;