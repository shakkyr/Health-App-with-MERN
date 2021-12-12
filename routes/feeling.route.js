const express = require('express')
const router = express.Router();
const feelingController = require('../controllers/feeling.controller');
const { authenticateJWT } = require('../middlware/authenticator');

router.post('/',authenticateJWT, feelingController.create)

router.get('/:id',feelingController.getFeeling)

module.exports = router;