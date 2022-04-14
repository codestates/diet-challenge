const router = require("express").Router();
const { accept, refuse, add, cancle } = require("../controllers/friends/index");

const { test } = require("../controllers/friends/test");

router.post("/accept", accept);
router.delete("/refuse/:friends_id", refuse);
router.post("/add", add);
router.delete("/cancle", cancle);
router.get("/test", test);
module.exports = router;
