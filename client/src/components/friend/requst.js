import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Requst = ({ name, id }) => {
  const navigate = useNavigate();
  const handledelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/friends/refuse`,
        { friendId: id },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .catch(() => console.log("delete"));
    navigate("/");
  };
  const handleaccept = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/friends/accept`,
        { friendId: id },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
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
