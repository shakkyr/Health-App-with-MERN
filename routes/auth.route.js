const express = require("express");
const router = express.Router();

const { signupValidator, signinValidator, validatorResult } = require("../middlware/validator");
const { signupController, signinController } = require("../controllers/auth.controller");

router.post("/signup", signupValidator, validatorResult, signupController);
router.post("/signin", signinValidator, validatorResult, signinController);



module.exports = router;
