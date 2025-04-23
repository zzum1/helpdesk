const express = require("express");
const { register, login } = require("../controllers/authController");
const verifyToken = require('../middleware/authentication')
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
