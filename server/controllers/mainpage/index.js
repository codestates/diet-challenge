//모델로 db와 소통하는데, 이때 소통방식은 sequelize 메소드임.
//모델이 가진 대부분의 메소드들은 promise를 리턴하는 비동기 실행함수임.
const { sequelize, post: postModel } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  const userInfo = isAuthorized(req);
    if (!userInfo)
      return res.status(400).json({
        data: null,
        message: "invalid access token",
      });

    const getLatestPost = () =>
      postModel.findOne({
        where: { id: userInfo.latestPostId },
        attributes: [
          "id",
          "goal",
          "user_id",
          ["photo", "img"],
          ["content", "info"],
        ],
      });

    const getFriends = () =>
      sequelize.query(
        `SELECT f.id as tableId, f.user_id as friendId, f.request, u.userNickName as nickname FROM friends f JOIN users u ON f.user_id = u.id WHERE f.fUser_id = ${userInfo.id}`,
        { type: sequelize.QueryTypes.SELECT }
      );

    const getFriendsLatestPosts = () =>
      sequelize.query(
        `select id, user_id, content as info, photo as img, goal from posts where posts.id in 
      (select latestPostId from users where users.id in 
      (select user_id from friends 
      where fUser_id = ${userInfo.id} and request = true))`,
        { type: sequelize.QueryTypes.SELECT }
      );

    try {
      const [latestPost, friends, friendsLatestPosts] = await Promise.all([
        getLatestPost(),
        getFriends(),
        getFriendsLatestPosts(),
      ]);

      res.status(200).json({
        data: {
          userInfo,
          latest: latestPost,
          friends,
          friendslatest: friendsLatestPosts,
        },
        message: "ok",
      });
    } catch (err) {
      res.status(500).json({ data: null, message: "server error" });
    }
};
