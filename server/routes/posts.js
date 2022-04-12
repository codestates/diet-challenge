const router = require("express").Router();
const multer = require("multer");
const { imageFilter, storage } = require("./middleware");
const controller = require("../controllers/posts");

const upload = multer({ storage, fileFilter: imageFilter });

//라우터
router.get("/", controller.post);

router.delete("/delete/:id", controller.delete);

router.post("/create", upload.single("image"), controller.create);

module.exports = router;
