import { initialState } from "./initialState";
import { TEST, SETLOGIN, SETACCESSTOKEN } from "../actions/index";

const userreducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, { test: state.test + 1 });

    case SETLOGIN:
      return Object.assign({}, state, { isLogin: !state.isLogin });

    case SETACCESSTOKEN:
      return Object.assign({}, state, {
        accessToken: action.payload.accessToken,
      });

    default:
      return state;
  }
};
export default userreducer;
