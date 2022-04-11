import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Friends } from "../components/friend/index";
import axios from "axios";
import { setMainPage, test } from "../actions/index";

function Home() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userreducer.accessToken);
  const reduxtest = useSelector((state) => state.userreducer.test);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((data) => {
        dispatch(setMainPage(data.data.data));
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-logo">
          <div className="logo">
            <span className="logo-icon">
              <img src="https://assets.codepen.io/285131/almeria-logo.svg" />
            </span>
            <h1 className="logo-title">
              <span>diet-challenge</span>
            </h1>
          </div>
        </div>
        <div className="app-header-navigation">
          <div className="tabs">
            <a href="#"></a>
            <a href="#" className="active"></a>
            <a href="#"></a>
            <a href="#">home</a>
            <a href="#">my activity</a>
            <a href="#">mypage</a>
          </div>
        </div>
        <div className="app-header-actions">
          <button className="user-profile">
            <span>김코딩</span>
            <span>
              <img src="/client/src/pages/img/자전거.png" />
            </span>
          </button>
          <div className="app-header-actions-buttons"></div>
        </div>
        <div className="app-header-mobile">
          <button className="icon-button large">
            <i className="ph-list" />
          </button>
        </div>
      </header>
      <div className="app-body">
        <div className="app-body-navigation">
          <nav className="navigation">
            {/* <a href="#">
              <i className="ph-browsers" />
              <span>친구요청</span>
            </a>
            <a href="#">
              <i className="ph-file-text" />
              <span>친구목록</span>
            </a> */}

            <Friends />
          </nav>

          {/* {위치표시} */}
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
        </div>
      </div>
    </div>
  );
}
export default Home;
