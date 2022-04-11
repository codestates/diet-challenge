const router = require("express").Router();
const { accept, refuse, add } = require("../controllers/friends");

router.post("/accept", accept);
router.delete("/refuse", refuse);
router.post("/add", add);

module.exports = router;
