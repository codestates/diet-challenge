const express = require("express");
const router = express.Router();
const loginController = require("../controllers/users/login");
const logoutController = require("../controllers/users/logout");
const signupController = require("../controllers/users/signup");
const withdrawalController = require("../controllers/users/withdrawal");
const checkController = require("../controllers/users/check");

router.post("/login", (req, res) => {});
router.post("/logout", (req, res) => {});
router.post("/signup", (req, res) => {});
router.delete("/withdrawal", (req, res) => {});
router.post("/check", (req, res) => {});

module.exports = router;
