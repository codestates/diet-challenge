const router = require("express").Router();
const {
  pwdChange,
  nickNameChange,
  goalChange,
} = require("../controllers/mypage");

router.post("/password", pwdChange);
router.post("/nickname", nickNameChange);
router.post("/goal", goalChange);

module.exports = router;
