const { user: userModel } = require("../../models"); //sequelize
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = {
  login: async (req, res) => {
    const { userId, userPassword } = req.body;
    const userInfo = await userModel.findOne({
      where: { userId, userPassword },
    });

    if (!userInfo) {
      res
        .status(401)
        .send({ data: null, message: "해당하는 회원이 존재하지 않습니다" });
    } else {
      delete userInfo.userPassword;
      const accessToken = generateAccessToken(userInfo.dataValues);

      res.status(200).send({ data: { accessToken }, message: "login success" });
    }
  },

  signup: async (req, res) => {
    const registed = await userModel.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });
    // if (registed) {
    //   res.status(400).send({ message: "이미 가입한 회원입니다" });
    // } else {
    //   //userId,userPassword(hash),userNickName,nowGoal,authorization 데이터베이스에 추가
    //   await sequelize.query(
    //     `INSERT INTO user (userId, userPassword, userNickName, nowGoal, authorization) VALUES (${req.body.userId}, ${req.body.password}, ${req.body.userNickName}, ${req.body.nowGoal})`
    //   );
    //   res.status(200).send({ message: "ok" });
    // }
  },

  withdrawal: (req, res) => {},

  check: async (req, res) => {
    const { userId, userNickName } = req.body;
    const idCheck = await userModel.findOne({
      where: { userId },
    });
    const nickNameCheck = await userModel.findOne({
      where: { userNickName },
    });

    console.log("idCheck: ", idCheck, "nickNameCheck: ", nickNameCheck);

    if (idCheck && nickNameCheck) {
      res.status(409).send({ message: "중복된 ID와 닉네임입니다" });
    } else if (idCheck) {
      res.status(409).send({ message: "중복된 ID입니다" });
    } else if (nickNameCheck) {
      res.status(409).send({ message: "중복된 닉네임입니다" });
    } else {
      res.status(200).send({ message: "중복없음" });
    }
  },
};
