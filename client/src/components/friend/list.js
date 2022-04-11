import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const FriendList = ({ name, id }) => {
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
      .catch(() => console.log("test"));
    navigate("/");
  };

  return (
    <div>
      {/* <img
        src="https://www.blockmedia.co.kr/wp-content/uploads/2021/02/%EC%9D%BC%EB%A1%A0%EB%A8%B8%EC%8A%A4%ED%81%AC_%EC%A0%95%EC%82%AC%EA%B2%A9%ED%98%95.jpg"
        alt=""
        class="user-img"
      ></img> */}
      <div className="username1">
        {name}
        <button type="butten" class=" btn morph" onClick={handledelete}>
          <i class="fas fa-user-plus"></i>
          친구삭제</button>
        
      </div>
    </div>
  );
};
