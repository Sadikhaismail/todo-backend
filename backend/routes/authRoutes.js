const express = require("express");
const { register, loginUser, logoutUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
