const { user: userModel } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");
const crypto = require("crypto");

module.exports = {
  pwdChange: (req, res) => {
    const userInfo = isAuthorized(req);
    if (!userInfo) {
      return res
        .status(400)
        .json({ data: null, message: "invalid access token" });
    }

    const { userpassword: inputPassword } = req.body;
    if (!userpassword)
      return res
        .status(400)
        .json({ data: null, message: "잘못된 요청입니다." });

    const salt = Math.round(new Date().valueOf() * Math.random()) + "";
    const hashPassword = crypto
      .createHash("sha512")
      .update(inputPassword + salt)
      .digest("hex");

    userModel
      .update(
        { userPassword: hashPassword, salt },
        { where: { id: userInfo.id } }
      )
      .then(([result]) => {
        if (!result)
          return res
            .status(500)
            .json({ data: null, message: "pwd update fail" });
        return res
          .status(200)
          .json({ data: null, message: "pwd update success" });
      })
      .catch((err) =>
        res.status(500).json({ data: err, message: "server error" })
      );
  },

  nickNameChange: (req, res) => {
    const userInfo = isAuthorized(req);
    if (!userInfo) {
      return res
        .status(400)
        .json({ data: null, message: "invalid access token" });
    }

    const { usernickname } = req.body;
    if (!usernickname)
      return res
        .status(400)
        .json({ data: null, message: "잘못된 요청입니다." });

    userModel
      .update({ userNickName: usernickname }, { where: { id: userInfo.id } })
      .then(([result]) => {
        if (!result)
          return res
            .status(500)
            .json({ data: null, message: "nickname update fail" });
        return res
          .status(200)
          .json({ data: null, message: "nickname update success" });
      })
      .catch((err) =>
        res.status(500).json({ data: err, message: "server error" })
      );
  },

  goalChange: (req, res) => {
    const userInfo = isAuthorized(req);
    if (!userInfo) {
      return res
        .status(400)
        .json({ data: null, message: "invalid access token" });
    }

    const { goal } = req.body;
    if (!goal)
      return res
        .status(400)
        .json({ data: null, message: "잘못된 요청입니다." });

    userModel
      .update({ nowGoal: goal }, { where: { id: userInfo.id } })
      .then(([result]) => {
        if (!result)
          return res
            .status(500)
            .json({ data: null, message: "goal update fail" });
        return res
          .status(200)
          .json({ data: null, message: "goal update success" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ data: err, message: "server error" });
      });
  },
};
