export const initialState = {
  isLogin: false,
  accessToken: "",
  userinfo: {
    id: "",
    userid: "",
    password: "",
    passwordcheck: "",
    usernickname: "",
    goal: "",
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
};
