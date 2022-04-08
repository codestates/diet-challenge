// 아이디 비밀번호 입력 구현
// 로그인x 시 보이는 첫 화면
// 웹 사이트에 대한 설명 추가

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "../components/modal";

function Main({ setIsLogin, setAccessToken }) {
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
          setAccessToken(data.data.data.accessToken);
          setIsLogin(true);
          navigate("/");
        })
        .catch((err) => {
          setalertmessage("아이디와 비밀번호가 틀렸습니다.");
          openModal();
        });
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-logo">
          <div className="logo">
            <span className="logo-icon"></span>
            <h1 className="logo-title">
              <span>Diet challenge</span>
            </h1>
          </div>
        </div>
        <div className="app-header-navigation"></div>
        <div className="app-header-actions">
          <span>아이디</span>
          <input type="id" onChange={handleInputValue("userId")} />
          <span>비밀번호</span>
          <input type="password" onChange={handleInputValue("userPassword")} />
          <button type="butten" onClick={handleLogin}>
            로그인
          </button>
          <Link to="/signup">
            <button type="butten">회원가입</button>
          </Link>
        </div>
        <div className="app-header-mobile">
          <button className="icon-button large">
            <i className="ph-list" />
          </button>
        </div>
      </header>
      <div className="app-body">
        <div className="app-body-side">
          <div className="side-wrpper">
            <div className="side-title">친구요청</div>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
              alt=""
              class="user-img"
            ></img>
            <div></div>

            <div class="btn-user">
              <button class="btn morph">
                <i class="fas fa-user-plus"></i>
                Add friend
              </button>
            </div>
            <div className="user">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50"
                alt=""
                class="user-img"
              ></img>
              <div class="btn-user">
                <button class="btn morph">
                  <i class="fas fa-user-plus"></i>
                  Add friend
                </button>
              </div>
              <img
                src="https://pbs.twimg.com/profile_images/2452384114/noplz47r59v1uxvyg8ku.png"
                alt=""
                class="user-img"
              ></img>
              <div class="btn-user">
                <button class="btn morph">
                  <i class="fas fa-user-plus"></i>
                  Add friend
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="side-title1">친구목록</div>
          <img
            src="https://www.blockmedia.co.kr/wp-content/uploads/2021/02/%EC%9D%BC%EB%A1%A0%EB%A8%B8%EC%8A%A4%ED%81%AC_%EC%A0%95%EC%82%AC%EA%B2%A9%ED%98%95.jpg"
            alt=""
            class="user-img"
          ></img>
          <div className="username1">Elon Musk</div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            class="user-img"
          ></img>
          <div className="username1">Jeffrey Bezos</div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            class="user-img"
          ></img>
          <div className="username1">Donald Cook</div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            class="user-img"
          ></img>
          <div className="username1">Zuckerberg</div>
        </div>

        <div className="app-body-main-content">
          <section className="service-section">
            <h2>나의 활동</h2>
            <div className="service-section-header">
              <div className="search-field">
                <i className="ph-magnifying-glass" />
                <input type="text" placeholder />
              </div>
              <div className="dropdown-field">
                <i className="ph-caret-down" />
              </div>
              <button className="flat-button">Search</button>
            </div>
            <div className="mobile-only">
              <button className="flat-button">Toggle search</button>
            </div>
            <div className="tiles">
              <article className="tile">
                <div className="tile-header">
                  <h3>
                    <span>나의 목표</span>
                    <span>: 10kg 감량</span>
                  </h3>
                </div>
                <a href="#">
                  <span>나의 활동</span>
                  <span className="icon-button">
                    <i className="ph-caret-right-bold" />
                  </span>
                </a>
              </article>
              <article className="tile">
                <div className="tile-header">
                  <h3>
                    <span />
                    <span />
                  </h3>
                </div>
                <a href="#">
                  <span>인증</span>
                  <span className="icon-button">
                    <i className="ph-caret-right-bold" />
                  </span>
                </a>
              </article>
              <article className="tile">
                <div className="tile-header">
                  <h3>
                    <span />
                    <span />
                  </h3>
                </div>
                <a href="#">
                  <span>인증</span>
                  <span className="icon-button">
                    <i className="ph-caret-right-bold" />
                  </span>
                </a>
              </article>
            </div>
            <div className="service-section-footer">
              <p>당신의 활동을 친구들에게 알려주세요.</p>
            </div>
          </section>
          <section className="transfer-section">
            <div className="transfer-section-header">
              <h2>새글쓰기</h2>

              <div className="filter-options">
                <i className="ph-plus" />
              </div>
            </div>
            <div className="transfers">
              <div className="transfer">
                <div className="transfer-logo"></div>
                <div>
                  <dt />
                  <dd />
                </div>
                <div>
                  <dt />
                  <dd />
                </div>
                <div>
                  <dt />
                  <dd />
                </div>
                <div className="transfer-number"></div>
              </div>
              <div className="transfer">
                <div className="transfer-logo"></div>
                <dl>
                  <div>
                    <dt />
                    <dd />
                  </div>
                  <div>
                    <dt />
                    <dd />
                  </div>
                  <div>
                    <dt />
                    <dd />
                  </div>
                </dl>
                <div className="transfer-number"></div>
              </div>
              <div className="transfer">
                <div className="transfer-logo"></div>
                <dl>
                  <div>
                    <dt />
                    <dd />
                  </div>
                  <div>
                    <dt />
                    <dd />
                  </div>
                  <div>
                    <dt />
                    <dd />
                  </div>
                </dl>
                <div className="transfer-number"></div>
              </div>
            </div>
          </section>
        </div>
        <div className="app-body-sidebar">
          <section className="payment-section">
            <h2>친구의 활동</h2>
            <div className="payment-section-header">
              <div></div>
            </div>
            <div className="payments">
              <div className="payment">
                <div className="card green">
                  <span />
                  <span></span>
                </div>
                <div className="payment-details">
                  <h3>친구 아이디</h3>
                  <div>
                    <span>활동내용</span>
                    <button className="icon-button">
                      <i className="ph-caret-right-bold" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="payment">
                <div className="card olive">
                  <span />
                  <span></span>
                </div>
                <div className="payment-details">
                  <h3>친구 아이디</h3>
                  <div>
                    <span>활동내용</span>
                    <button className="icon-button">
                      <i className="ph-caret-right-bold" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="payment">
                <div className="card gray">
                  <span />
                  <span></span>
                </div>
                <div className="payment-details">
                  <h3>친구 아이디</h3>
                  <div>
                    <span>활동내용</span>
                    <button className="icon-button">
                      <i className="ph-caret-right-bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
            <div className="payment-section-footer"></div>
          </section>
          <Modal open={modalOpen} close={closeModal}>
            {alertmessage}
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Main;
