const router = require("express").Router();
const controller = require("../controllers/posts");
const multer = require("multer");

const upload = multer({ dest: "./upload" });
//라우터
router.get("/", controller.post);

router.delete("/delete/:id", controller.delete);

router.post("/create", upload.single("img"), controller.create);

module.exports = router;
