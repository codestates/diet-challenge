export const initialState = {
  isLogin: false,
  accessToken: "dummyaccesstoken",
  userInfo: {
    id: "1",
    userId: "kimcoding",
    usernickname: "김코딩",
    nowGoal: "1주일에 3kg감량",
    latestPostId: null,
    authorization: false,
  },
  latest: { goal: "", info: "", img: "" },
  friendslatest: [
    {
      id: 8,
      goal: "8888",
      photo: null,
      content: "8888",
      user_id: 11,
      createdAt: "2022-04-12T09:48:28.000Z",
      updatedAt: "2022-04-12T09:48:28.000Z",
    },
    {
      id: 6,
      goal: "6666",
      photo: null,
      content: "6666",
      user_id: 11,
      createdAt: "2022-04-12T09:48:01.000Z",
      updatedAt: "2022-04-12T09:48:01.000Z",
    },
  ],
  test: 0,
  friends: [
    { friendId: 1, nickname: "kimcoding", request: true },
    { friendId: 2, nickname: "parkhacker", request: true },
    { friendId: 3, nickname: "jordan", request: true },
    { friendId: 4, nickname: "messi", request: true },
    { friendId: 5, nickname: "musk", request: false },
    { friendId: 6, nickname: "ronaldo", request: false },
  ],
  img: "",
  myposts: {
    posts: [],
    hasNext: false,
  },
};
