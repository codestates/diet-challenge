import { initialState } from "./initialState";
import {
  TEST,
  SETLOGIN,
  SETACCESSTOKEN,
  SETMAINPAGE,
  SETIMG,
  DELETEFRIEND,
  ACCEPTFRIEND,
  CHANGENICKNAME,
  CHANGEGOAL,
  SETSWITCH,
  SETLATEST,
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

    case DELETEFRIEND:
      return Object.assign({}, state, {
        friends: state.friends.filter((el) => {
          return el.friendId !== action.payload.friendId;
        }),
      });

    case ACCEPTFRIEND:
      return Object.assign({}, state, {
        friends: state.friends.map((el) => {
          if (el.friendId === action.payload.friendId) {
            el.request = 1;
          }
          return el;
        }),
      });

    case CHANGENICKNAME:
      return Object.assign({}, state, {
        userInfo: Object.assign(state.userInfo, {
          userNickName: action.payload.userNickName,
        }),
      });

    case CHANGEGOAL:
      return Object.assign({}, state, {
        userInfo: Object.assign(state.userInfo, {
          nowGoal: action.payload.nowGoal,
        }),
      });

    case SETSWITCH:
      return Object.assign({}, state, { switch: !state.switch });

    case SETLATEST:
      return Object.assign({}, state, { latest: action.payload.latest });

    default:
      return state;
  }
};
export default userreducer;
