const { post: postModel, user: userModel } = require("../../models");
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
        const hasNext =
          total - (Number(offset) + Number(limit)) > 0 ? true : false;

        res.status(200).json({
          data: {
            posts: list,
            hasNext,
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
    const userInfo = isAuthorized(req);
    if (!userInfo)
      return res.status(400).json({
        data: null,
        message: "invalid access token",
      });

    const { info, goal } = req.body;
    const imgPath = "/image/" + req.file.filename;

    let latestPostTemp;
    postModel
      .create({
        goal,
        photo: imgPath,
        content: info,
        user_id: userInfo.id,
      })
      .then((created) => {
        if (!created)
          return res
            .status(500)
            .json({ data: null, message: "create post fail" });

        latestPostTemp = created;
        return userModel.update(
          { latestPostId: created.id },
          { where: { id: userInfo.id } }
        );
      })
      .then((result) => {
        if (!result)
          return res
            .status(500)
            .json({ data: null, message: "lastestPostId update fail" });

        res.status(201).json({ data: latestPostTemp, message: "ok" });
      })
      .catch((err) =>
        res.status(500).json({ data: err, message: "server error" })
      );
  },
};
