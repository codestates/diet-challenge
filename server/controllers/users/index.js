const { user: userModel } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = {
  login: async (req, res) => {
    const { userId, userPassword } = req.body;

    try {
      const userInfo = await userModel.findOne({
        where: { userId, userPassword },
      });

      if (!userInfo) {
        return res
          .status(401)
          .json({ data: null, message: "해당하는 회원이 존재하지 않습니다" });
      }

      delete userInfo.userPassword;
      const accessToken = generateAccessToken(userInfo.dataValues);

      if (accessToken) {
        return res.status(200).json({
          data: { accessToken, userInfo },
          message: "ok",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ data: err, message: "server error" });
    }
  },

  signup: async (req, res) => {
    const { userId, userPassword, userNickName, nowGoal } = req.body;

    if (!userId || !userPassword || !userNickName)
      return res.status(400).json({
        data: null,
        message: "필수 입력란을 모두 입력해주세요.",
      });

    try {
      const registered = await userModel.create({
        userId,
        userPassword,
        userNickName,
        nowGoal,
      });

      if (!registered) {
        return res.status(500).json({ data: null, message: "fail" });
      }

      res.status(201).json({ data: null, message: "ok" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ data: err, message: "server error" });
    }
  },

  withdrawal: (req, res) => {},

  check: async (req, res) => {
    const { userId, userNickName } = req.body;
    if (userId) {
      const idCheck = await userModel.findOne({
        where: { userId },
      });

      if (idCheck)
        return res.status(409).json({ message: "이미 사용 중인 ID입니다." });
      res.status(200).json({ data: null, message: "중복 없음" });
    }

    if (userNickName) {
      const nickNameCheck = await userModel.findOne({
        where: { userNickName },
      });

      if (nickNameCheck)
        return res.status(409).json({ message: "이미 사용 중인 닉네임입니다" });
      res.status(200).json({ data: null, message: "중복 없음" });
    }
  },
};
