const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo)
    return res.status(400).json({
      data: null,
      message: "invalid access token",
    });

  if (!userInfo.authorization)
    return res.status(400).send({ data: null, message: "권한 없음." });
  return res.status(200).send({ data: null, message: "ok" });
};
