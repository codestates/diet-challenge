const fs = require("fs");
const { post: postModel } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  //페이지네이션
  post: (req, res) => {
    const userInfo = isAuthorized(req);
    if (!userInfo)
      return res.status(400).json({
        data: null,
        message: "invalid access token",
      });

    const { offset, limit } = req.query;
    if (!offset || !limit)
      return res
        .status(400)
        .json({ data: null, message: "올바른 요청이 아닙니다." });

    Promise.all([
      postModel.findAll({
        order: [["createdAt", "DESC"]],
        where: { user_id: userInfo.id },
        offset: Number(offset),
        limit: Number(limit),
      }),
      postModel.count({
        where: { user_id: userInfo.id },
      }),
    ])
      .then(([list, total]) => {
        if (list.length === 0)
          return res.status(200).json({ data: null, message: "내용 없음." });
        res.status(200).json({
          data: {
            posts: list,
            hasNext: total - (offset + limit) > 0 ? true : false,
          },
          message: "ok",
        });
      })
      .catch((err) =>
        res.status(500).json({ data: err, message: "server error" })
      );
  },

  delete: async (req, res) => {
    const userInfo = isAuthorized(req);
    if (!userInfo)
      return res.status(400).json({
        data: null,
        message: "invalid access token",
      });

    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ data: null, message: "올바른 요청이 아닙니다." });

    const userCheck = await postModel.findOne({
      where: { id, user_id: userInfo.id },
    });
    if (!userCheck)
      return res
        .status(400)
        .json({ data: null, message: "올바른 요청이 아닙니다." });

    postModel
      .destroy({
        where: { id },
      })
      .then((count) =>
        res.status(200).json({ data: null, message: `${count}개 삭제 성공` })
      )
      .catch((err) =>
        res.status(500).json({ data: err, message: "server error" })
      );
  },

  create: async (req, res) => {
    const image = req.file.path;
    console.log("1 :", req.file);
    console.log("2 :", image);

    if (image) res.sendStatus(200);
    else res.sendStatus(400);
    // try {
    //   // blob형태를 base64로 변환
    //   const imgData = fs
    //     .readFileSync(`req.file.path`)
    //     .toString("base64");
    //   // db에 path 저장
    //   await Image.create({ path: imgData });
    //   res.json({ path: imgData });
    // } catch (err) {
    //   res.status(400).json({ success: false, message: err.message });
    // }
  },
};
