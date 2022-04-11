export const TEST = "TEST";
export const SETLOGIN = "SETLOGIN";
export const SETACCESSTOKEN = "SETACCESSTOKEN";
export const SETMAINPAGE = "SETMAINPAGE";

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
