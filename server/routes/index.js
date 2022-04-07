const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainpage");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.get("/", (req, res) => {
  res.status(201).send("Hello World");
});

module.exports = router;
