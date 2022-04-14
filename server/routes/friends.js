const router = require("express").Router();
const { accept, refuse, add, cancle } = require("../controllers/friends/index");

const { test } = require("../controllers/friends/test");

router.post("/accept", accept);
router.delete("/refuse/:friendTableId", refuse);
router.post("/add", add);
router.delete("/cancle/:id", cancle);
// router.get("/test", test);
module.exports = router;
