import React, { useState } from "react";
import axios from "axios";
import { Modal } from "../modal";
import { useSelector } from "react-redux";

export const Addfriend = () => {
  const [nickname, setnickname] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [alertmessage, setalertmessage] = useState("");

  const accessToken = useSelector((state) => state.userreducer.accessToken);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputValue = (e) => {
    setnickname(e.target.value);
  };
  const handleRequest = () => {
    console.log(nickname);
    if (nickname === "") {
      setalertmessage("닉네임을 입력해 주세요");
      openModal();
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/friends/add`,
          {
            userNickName: nickname,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            "Content-Type": "application/json",
            withCredentials: true,
          }
        )
        .then((data) => {
          //setalertmessage("친구 요청이 완료됐습니다.");
          setalertmessage(data.data.message); //수정
          openModal();
        })
        .catch(() => {
          setalertmessage("존재하지 않는 닉네임 입니다");
          openModal();
        });
    }
  };

  return (
    <div>
      <span className="member1">닉네임</span>
      <input class="btn morph active" type="text" onChange={handleInputValue} />
      <i class="fas fa-search"></i> 
      <button type="butten" class="btn morph" onClick={handleRequest}>
        <i class="fas fa-user-plus"></i>
        친구요청
      </button>
      <Modal open={modalOpen} close={closeModal}>
        {alertmessage}
      </Modal>
    </div>
  );
};
