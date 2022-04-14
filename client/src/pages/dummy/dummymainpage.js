export const dummy = {
  data: {
    userInfo: {
      id: 1,
      userId: "one",
      userNickName: "yoon",
      nowGoal: null,
      latestPostId: 2,
      authorization: false,
      createdAt: "2022-04-14T06:55:14.000Z",
      updatedAt: "2022-04-14T07:16:43.000Z",
      iat: 1649921433,
      exp: 1650007833,
    },
    latest: {
      id: 2,
      goal: "null",
      user_id: 1,
      img: "/image/d8efd804e0a0a876bb21b5b55265db02",
      info: "손흥민",
    },
    friends: [{ tableId: 2, friendId: 2, request: 1, nickname: "choi" }],
    friendslatest: [
      {
        id: 4,
        user_id: 2,
        info: "카이리 어빙",
        img: "/image/a497dbfbdd58c89cd8f5773d0a10ce82",
        goal: "null",
      },
    ],
  },
  message: "ok",
};

const sdfs = {
  data: {
    name: "SequelizeDatabaseError",
    parent: {
      code: "ER_BAD_FIELD_ERROR",
      errno: 1054,
      sqlState: "42S22",
      sqlMessage: "Unknown column 'postId' in 'field list'",
      sql: "SELECT `id`, `userId`, `userNickName`, `userPassword`, `nowGoal`, `latestPostId`, `authorization`, `createdAt`, `updatedAt`, `postId` FROM `users` AS `user` WHERE `user`.`userId` = 'one' AND `user`.`userPassword` = '1111' LIMIT 1;",
    },
    original: {
      code: "ER_BAD_FIELD_ERROR",
      errno: 1054,
      sqlState: "42S22",
      sqlMessage: "Unknown column 'postId' in 'field list'",
      sql: "SELECT `id`, `userId`, `userNickName`, `userPassword`, `nowGoal`, `latestPostId`, `authorization`, `createdAt`, `updatedAt`, `postId` FROM `users` AS `user` WHERE `user`.`userId` = 'one' AND `user`.`userPassword` = '1111' LIMIT 1;",
    },
    sql: "SELECT `id`, `userId`, `userNickName`, `userPassword`, `nowGoal`, `latestPostId`, `authorization`, `createdAt`, `updatedAt`, `postId` FROM `users` AS `user` WHERE `user`.`userId` = 'one' AND `user`.`userPassword` = '1111' LIMIT 1;",
    parameters: {},
  },
  message: "server error",
};
