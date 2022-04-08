// 아이디 비밀번호 입력 구현
// 로그인x 시 보이는 첫 화면
// 웹 사이트에 대한 설명 추가
import React from "react"
function Main(){
   
    return (

        <div className="app">
          <header className="app-header">
            <div className="app-header-logo">
              <div className="logo">
                
                <h1 className="logo-title">
                  <span>diet-challenge</span>
                </h1>
              </div>
            </div>
            <div className="app-header-navigation">
              <div className="tabs">
                <a href="#">
                </a>
                <a href="#" className="active">
                </a>
                <a href="#">
                </a>
                <a href="#">
                  home
                </a>
                <a href="#">
                  my activity
                </a>
                <a href="#">
                  mypage
                </a>
                <a href="#">
                  log out
                </a>
              </div>
            </div>
            <div className="app-header-actions">
              <button className="user-profile">
                <span>김코딩</span>
                <span>
                  <img src="/client/src/pages/img/자전거.png" />
                </span>
              </button>
              <div className="app-header-actions-buttons">
              </div>
            </div>
            <div className="app-header-mobile">
              <button className="icon-button large">
                <i className="ph-list" />
              </button>
            </div>
          </header>
          <div className="app-body">
            <div className="app-body-navigation">
              <div class="side-wrapper">
              <div className="side-wrapper">
        <div className="side-menu">
          <div className="side-title">친구요청</div>
          <div className="user">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="" className="user-img" />
            <div className="username">Inez Gibson</div>
          </div>
          <div className="user">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50" alt="" className="user-img" />
            <div className="username">Francis Wolfe</div>
          </div>
        </div></div>
        <div></div>
                  <div class="side-menu">
                      <div class="side-title">
                          친구목록
                      </div>
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50" alt="" className="user-img" />
                     
                  <div class="username">
                        francis wolf
                  </div>
                  </div>
              </div>
              <nav className="navigation">
                
                
                </nav>
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
                  <button className="flat-button">
                    Search
                  </button>
                </div>
                <div className="mobile-only">
                  <button className="flat-button">
                    Toggle search
                  </button>
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
                <div className="pictures">
                  <div className="picture">
                    
                    <div className="transfer-number">
                    </div>
                  </div>
                  <div className="transfer">
                    <div className="transfer-logo">
                    </div>
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
                    <div className="transfer-number">
                    </div>
                  </div>
                  <div className="transfer">
                    <div className="transfer-logo">
                    </div>
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
                    <div className="transfer-number">
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="app-body-sidebar">
              <section className="payment-section">
                <h2>친구의 활동</h2>
                <div className="payment-section-header">
                  <div>
                  </div>
                </div>
                <div className="payments">
                  <div className="payment">
                    <div className="card green">
                      <span />
                      <span>
                      </span>
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
                      <span>
                      </span>
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
                      <span>
                      </span>
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
                  <div>
                  </div>
                </div>
                <div className="payment-section-footer">
                </div>
              </section>
            </div>
          </div>
        </div>
      ); 
}    
    export default Main
    