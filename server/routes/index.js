const router = require("express").Router();
const controller = require("../controllers/mainpage");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.get("/", controller);

module.exports = router;
