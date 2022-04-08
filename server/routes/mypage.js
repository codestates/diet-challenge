const router = require("express").Router();
const controller = require("../controllers/mypage/infochange");

router.patch("/infochange", controller);

module.exports = router;
