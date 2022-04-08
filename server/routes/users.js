const router = require("express").Router();
const { login, signup, withdrawal, check } = require("../controllers/users");

router.post("/login", login);
router.post("/signup", signup);
router.delete("/withdrawal", withdrawal);
router.post("/check", check);

module.exports = router;
