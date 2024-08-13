const express = require("express");
const router = express.Router();

const { createUser } = require("../Controllers/userController");
const { loginUser } = require("../Controllers/userController");

router.route('/register').post(createUser);
router.route('/login').post(loginUser);

module.exports = router;