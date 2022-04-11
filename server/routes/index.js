const router = require("express").Router();
const mainController = require("../controllers/mainpage");
const adminController = require("../controllers/mainpage/admin");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.get("/", mainController);
router.get("/admin", adminController);
module.exports = router;
