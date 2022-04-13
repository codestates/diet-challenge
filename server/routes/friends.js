const router = require("express").Router();
const { accept, refuse, add, cancle } = require("../controllers/friends");

router.post("/accept", accept);
router.delete("/refuse/:friends_id", refuse);
router.post("/add", add);
router.delete("/cancle", cancle);
module.exports = router;
