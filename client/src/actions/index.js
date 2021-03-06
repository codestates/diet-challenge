export const TEST = "TEST";
export const SETLOGIN = "SETLOGIN";
export const SETACCESSTOKEN = "SETACCESSTOKEN";
export const SETMAINPAGE = "SETMAINPAGE";
export const SETIMG = "SETIMG";
export const DELETEFRIEND = "DELETEFRIEND";
export const ACCEPTFRIEND = "ACCEPTFRIEND";
export const CHANGENICKNAME = "CHANGENICKNAME";
export const CHANGEGOAL = "CHANGEGOAL";
export const SETSWITCH = "SETSWITCH";
export const SETLATEST = "SETLATEST";

export const test = () => {
  return {
    type: TEST,
  };
};

export const setLogin = () => {
  return {
    type: SETLOGIN,
  };
};

export const setAccessToken = (accessToken) => {
  return {
    type: SETACCESSTOKEN,
    payload: {
      accessToken: accessToken,
    },
  };
};
export const setMainPage = (data) => {
  return {
    type: SETMAINPAGE,
    payload: {
      data,
    },
  };
};
export const setImg = (img) => {
  return {
    type: SETIMG,
    payload: {
      img: img,
    },
  };
};
export const deletefriend = (id) => {
  return {
    type: DELETEFRIEND,
    payload: {
      friendId: id,
    },
  };
};
export const acceptfriend = (id) => {
  return {
    type: ACCEPTFRIEND,
    payload: {
      friendId: id,
    },
  };
};
export const setchangenickname = (nickname) => {
  return {
    type: CHANGENICKNAME,
    payload: {
      userNickName: nickname,
    },
  };
};
export const setchangegoal = (goal) => {
  return {
    type: CHANGEGOAL,
    payload: {
      nowGoal: goal,
    },
  };
};

export const setSwitch = () => {
  return {
    type: SETSWITCH,
  };
};
export const setLatest = (data) => {
  return {
    type: SETLATEST,
    payload: {
      latest: data,
    },
  };
};
