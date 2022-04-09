export const TEST = "TEST";
export const SETLOGIN = "SETLOGIN";
export const SETACCESSTOKEN = "SETACCESSTOKEN";

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
