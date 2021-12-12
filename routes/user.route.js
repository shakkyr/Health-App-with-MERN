const express = require('express')
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticateJWT } = require('../middlware/authenticator');

router.post('/',authenticateJWT, userController.getOneUserData) 

router.get('/:id',userController.readAll)


module.exports = router;

