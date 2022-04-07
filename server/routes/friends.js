const express = require("express");
const router = express.Router();
const acceptController = require("../controllers/friends/accept");
const refuseController = require("../controllers/friends/refuse");
const addController = require("../controllers/friends/add");

router.post("/accept", (req, res) => {});
router.delete("/refuse", (req, res) => {});
router.post("/add", (req, res) => {});

module.exports = router;
