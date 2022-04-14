// 아이디 비밀번호 입력 구현
// 로그인x 시 보이는 첫 화면
// 웹 사이트에 대한 설명 추가

import React, { useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Modal } from "../components/modal";
import { useDispatch } from "react-redux";
import { setLogin, setAccessToken } from "../actions/index";
import Signup from "./signup";

function Main() {
  const [userinfo, setuserinfo] = useState({
    userId: "",
    userPassword: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [alertmessage, setalertmessage] = useState("");
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    console.log(userinfo);
    if (userinfo.userId === "" || userinfo.userPassword === "") {
      setalertmessage("아이디와 비밀번호를 입력해주세요.");
      openModal();
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/login`, userinfo, {
          "Content-Type": "application/json",
          withCredentials: true,
        })
        .then((data) => {
          dispatch(setAccessToken(data.data.data.accessToken));
          dispatch(setLogin());
          navigate("/");
        })
        .catch((err) => {
          setalertmessage("아이디와 비밀번호가 틀렸습니다.");
          openModal();
        });
    }
  };
  return (
    <div className="video-app">
      <div className="header">
        <div className="header-left">
          <div className="logo-title">Diet challenge</div>
        </div>
        <div className="header-menu">
          <Link to="/">
            <div className="header-menu2">Home</div>
          </Link>
          <Link to="/signup">
            <div className="header-menu2">회원가입</div>
          </Link>
        </div>
        <span className="header-menu1">
          아이디 <input type="id" onChange={handleInputValue("userId")} />
          
          <div></div>
        </span>
        <span className="header-menu1">비밀번호</span>
        <div></div>
        <input type="password" onChange={handleInputValue("userPassword")} />
        <button type="button" onClick={handleLogin}>
          로그인
        </button>
      </div>
      <div className="wrapper">
        <div className="left-side">
          <div className="side-wrapper"></div>
          <div className="side-wrapper">
            <div className="side-menu">
              <div className="side-title">친구요청</div>
            </div>
          </div>
          <div className="side-wrapper">
            <div className="side-menu">
              <div className="side-title">친구목록</div>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="body-title">
            <div className="body-menu">
              <div id="top-banner" className="banner">
                <div className="banner-inner-wrap">
                  <h2 className="main-header">
                    <h1 className="main-header1">Diet challenge</h1>
                    다이어트 n년차! 이번엔 성공하자 
                    친구와 함께 기록을 공유하며 함께 성공해요
                    </h2>
                </div>

                <Routes>
                  <Route path="/" element={<div></div>} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} close={closeModal}>
        {alertmessage}
      </Modal>
    </div>
  );
}
export default Main;
