import { initialState } from "./initialState";
import {
  TEST,
  SETLOGIN,
  SETACCESSTOKEN,
  SETMAINPAGE,
  SETIMG,
} from "../actions/index";

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

    case SETMAINPAGE:
      return Object.assign({}, state, action.payload.data);

    case SETIMG:
      return Object.assign({}, state, { img: action.payload.img });

    default:
      return state;
  }
};
export default userreducer;
