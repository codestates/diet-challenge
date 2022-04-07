const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");
const createController = require("../controllers/posts/create");
const deleteController = require("../controllers/posts/delete");

router.get("/", (req, res) => {});
router.delete("/delete", (req, res) => {});
router.post("/create", (req, res) => {});

module.exports = router;
