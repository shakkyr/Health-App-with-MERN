const express = require('express')
const router = express.Router();
const waterController = require('../controllers/water.controller');
const { authenticateJWT } = require('../middlware/authenticator');

router.post('/',authenticateJWT, waterController.create)

router.get('/:id',waterController.getWater)

module.exports = router;