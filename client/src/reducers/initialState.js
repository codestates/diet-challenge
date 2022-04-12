export const initialState = {
  isLogin: false,
  accessToken: "",
  userinfo: {
    id: "1",
    userid: "kimcoding",
    usernickname: "김코딩",
    goal: "1주일에 3kg감량",
  },
  latest: { goal: "", info: "", img: "" },
  friendslatest: [],
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
};
