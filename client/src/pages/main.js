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
          <div className="logo-title">Diet-challenge</div>
        </div>
        <div className="header-menu">
          <Link to="/">
            <div className="header-menu">Home</div>
          </Link>
          <Link to="/signup">
            <div className="header-menu">회원가입</div>
          </Link>
        </div>
        <span>
          아이디
          <input type="id" onChange={handleInputValue("userId")} />
          <div></div>
        </span>
        <span>비밀번호</span>
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

        <div className="wrapper">
          <div className="app-body">
            <div className="body-title">
              <div className="body-menu">
                <div id="top-banner" className="banner">
                  <div className="banner-inner-wrapper">
                    <h2>
                      다이어트 n년차! 이번엔 성공하자 <br />
                      친구와 함께 기록을 공유하며 함께 성공해요
                    </h2>
                    <h1>Diet challenge</h1>
                    See what's my activity
                  </div>
                  <Routes>
                    <Route path="/" element={<div>hi</div>} />
                    <Route path="/signup" element={<Signup />} />
                  </Routes>

                  <div className="load-more">
                    <svg
                      id="me"
                      xmlns="http://w3.org/2000/svg"
                      viewBox="0 0 341.333 341.333"
                      fill="currentColor"
                    >
                      <path d="M341.227 149.333V0l-50.133 50.133C260.267 19.2 217.707 0 170.56 0 76.267 0 .107 76.373.107 170.667s76.16 170.667 170.453 170.667c79.467 0 146.027-54.4 164.907-128h-44.373c-17.6 49.707-64.747 85.333-120.533 85.333-70.72 0-128-57.28-128-128s57.28-128 128-128c35.307 0 66.987 14.72 90.133 37.867l-68.8 68.8h149.333z" />
                    </svg>
                    Load More
                  </div>
                </div>
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
