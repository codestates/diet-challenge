// const friendModel = require("../../models/friend");
// const userModel = require("../../models/user");
const { friend: friendModel } = require("../../models");
const { user: userModel } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = {
  accept: (req, res) => {
    //파라미터 또는 쿼리로 friends 테이블 id, 친구의 users 테이블 id가 와야 함. (일단 쿼리로 온다고 가정)
    const userInfo = isAuthorized(req);
    if (!userInfo)
      return res.status(400).json({
        data: null,
        message: "invalid access token",
      });

    const { friends_id, friend_users_id } = req.query;
    if (!friends_id || !friend_users_id)
      return res
        .status(400)
        .json({ data: null, message: "잘못된 요청입니다." });

    friendModel
      .update({ request: true }, { where: { id: friends_id } })
      .then((result) => {
        if (result[0]) {
          //update 메소드의 리턴값은 [업데이트된 row의 수]임.
          return friendModel.create({
            user_id: userInfo.id,
            fUser_id: friend_users_id,
            request: true,
          });
        }
      })
      .then(() => {
        return res
          .status(201)
          .send({ data: null, message: "친구 요청을 수락했습니다." });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ data: null, message: "server error" });
      });
  },

  refuse: (req, res) => {
    const userInfo = isAuthorized(req);
    if (!userInfo)
      return res.status(400).json({
        data: null,
        message: "invalid access token",
      });

    const { friends_id } = req.query;
    if (!friends_id)
      return res
        .status(400)
        .json({ data: null, message: "잘못된 요청입니다." });
    friendModel
      .destroy({ where: { id: friends_id } })
      .then(() => {
        return res
          .status(200)
          .send({ data: null, message: `친구 요청을 거절했습니다.` });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ data: null, message: "server error" });
      });
  },

  add: async (req, res) => {
    console.log(req.body);
    const userInfo = isAuthorized(req);
    if (!userInfo)
      return res.status(400).json({
        data: null,
        message: "invalid access token",
      });

    const { userNickName } = req.body; //파라미터로 보낼 수도 있음.
    const friendUserData = await userModel.findOne({
      where: { userNickName },
    });

    if (!friendUserData)
      return res
        .status(400)
        .json({ data: null, message: "닉네임이 존재하지 않습니다." });

    const userReqData = await friendModel.findOne({
      where: { user_id: userInfo.id, fUser_id: friendUserData.id },
    });

    if (userReqData) {
      if (userReqData.request)
        return res.status(400).json({ data: null, message: "친구입니다." });
      return res
        .status(400)
        .json({ data: null, message: "이미 요청된 친구입니다." });
    }

    const friendReqData = await friendModel.findOne({
      where: { user_id: friendUserData.id, fUser_id: userInfo.id },
    });

    if (friendReqData) {
      if (friendReqData.request)
        return res.status(400).json({ data: null, message: "친구입니다." });
      return res
        .status(400)
        .json({ data: null, message: "친구 요청 목록을 확인해주세요." });
    }

    //여기까지 왔으면 friends 테이블에 새로운 row를 추가해야 함!
    //(user_id: userInfo.id, fUser_id: friendUserData.id, request: false(default))
    const reqestToFriend = await friendModel.create({
      user_id: userInfo.id,
      fUser_id: friendUserData.id,
    });

    if (reqestToFriend) {
      return res.status(201).json({
        //data는 일단 임시임.. 메인 페이지가 다시 렌더링 되면서 friends data를 다시 받게 됨.
        data: {
          frineds_id: reqestToFriend.id,
          fUser_id: reqestToFriend.fUser_id,
        },
        message: "ok",
      });
    }

    return res.status(500).json({ data: null, message: "server error" });
  },
};
