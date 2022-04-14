import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { acceptfriend, deletefriend } from "../../actions";

export const Requst = ({ name, id, tableid }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userreducer.accessToken);

  const handledelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/friends/refuse/${tableid}`, //파라미터 사용(친구테이블 id)
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(deletefriend(id));
      })
      .catch(() => console.log("delete"));
    navigate("/");
  };
  const handleaccept = () => {
    console.log(id);
    axios
      .post(
<<<<<<< HEAD
        `http://localhost:4000/friends/accept`,
        { friendTableId: id, friend_users_id: "" }, //메인페이지에서 전달받은 친구 정보중 친구테이블 id, 친구의 users 테이블 id
=======
        `${process.env.REACT_APP_API_URL}/friends/accept`,
        { friendTableId: tableid, friend_users_id: id }, //메인페이지에서 전달받은 친구 정보중 친구테이블 id, 친구의 users 테이블 id
>>>>>>> 3f7666ca2f8cc6114601c7914816395c97e4ecd1
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(acceptfriend(id));
      })
      .catch(() => console.log("accept"));
    navigate("/");
  };

  return (
    <div className="user">
      {/* <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50"
        alt=""
        class="user-img"
      ></img> */}
      <div className="member2">{name}</div>
      <div class="btn-user">
        <button class="btn morph" onClick={handleaccept}>
          <i class="fas fa-user-plus"></i>
          요청수락
          <div />
        </button>
        <button class="btn morph" onClick={handledelete}>
          <i class="fas fa-user-plus"></i>
          <div></div>
          요청 거절
        </button>
      </div>
    </div>
  );
};
