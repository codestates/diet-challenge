import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletefriend } from "../../actions";

export const FriendList = ({ name, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userreducer.accessToken);

  const handledelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/friends/cancle/${id}`, //파라미터로 받음.
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
      <div className="member3">
        {name}
        <button  class="btn morph" onClick={handledelete}><i class="fas fa-user-plus"></i>
          친구삭제          
          <div>
          </div>
        </button>
      </div>
    </div>
  );
};
