import React from "react";

function Home() {
  return (
    <div className="video-app">
    <div className="dark-light">
      <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d /></svg>
    </div>
    <div className="header">
      <div className="header-left">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18" /></svg>
        <div className="logo">
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-menu">
        <div className="menu-item active">Home</div> 
        <div className="menu-item">Categories</div>
        <div className="menu-item notify">Subscriptions</div>
      </div>
      <div className="user-settings">
        <button className="button">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 512.06 512.06">
            <path d />
            <path d="M245.03 253.66l-64 64 22.56 22.56 36.8-36.64v153.44h32V303.58l36.64 36.64 22.56-22.56-64-64a16 16 0 00-22.55 0z" /></svg>
          Upload
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /></svg>
        <img className="user-profile " src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 492 492">
          <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z" /></svg>
      </div>
    </div>
    <div className="wrapper">
      <div className="left-side">
        <div className="side-wrapper">
          <div className="side-menu">
            <a href="#">
              <svg width={20} height={17} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path id="a" d="M13 22v-6h4v6h5v-8h3L15 5 5 14h3v8z" />
                </defs>
                <g transform="translate(-5 -5)" fill="none" fillRule="evenodd">
                  <mask id="b" fill="currentColor">
                    <use xlinkHref="#a" />
                  </mask>
                  <g mask="url(#b)" fill="currentColor">
                    <path d="M2 2h26v26H2z" />
                  </g>
                </g>
              </svg>
              Home
            </a>
          </div>
        </div>
        <div className="side-wrapper">
          <div className="side-menu">
            <div className="side-title">친구요청</div>
            <button className="button show-more">Show More
            </button>
          </div>
        </div>
        <div className="side-wrapper">
          <div className="side-menu">
            <div className="side-title">친구목록</div>
            <button className="button show-more">Show More
            </button>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="profile">
          <div className="profile-contact-info">
            <div className="profile-contact">
            </div>
            <div className="profile-contact">
              <path d="M85.3 341.3a85.4 85.4 0 11.2-170.8 85.4 85.4 0 01-.2 170.8zm0-138.6a53.4 53.4 0 10.2 106.8 53.4 53.4 0 00-.2-106.8zm0 0">
                <path d="M135.7 245.8a21.3 21.3 0 01-10.6-40L323.1 93a21.3 21.3 0 1121 37.1L146.3 243c-3.3 1.9-7 2.8-10.5 2.8zm0 0M333.6 421.8c-3.6 0-7.2-1-10.5-2.8L125 306a21.4 21.4 0 0121.2-37l198 112.8a21.4 21.4 0 01-10.7 39.9zm0 0">
                </path></path></div>
            <div className="profile-contact">
              <svg viewBox="0 0 515.6 515.6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M496.7 212.2a64.4 64.4 0 11-91.2 91.1 64.4 64.4 0 0191.2-91M303.3 212.2a64.4 64.4 0 11-91 91.1 64.4 64.4 0 0191-91M110 212.2A64.4 64.4 0 1119 303.3a64.4 64.4 0 0191.1-91" /></svg>
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.33 469.33" fill="currentColor">
                <path d="M320 213.33c35.3 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 213.33c35.31 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 256C99.52 256 0 280.96 0 330.67V384h298.67v-53.33c0-49.71-99.52-74.67-149.34-74.67zM320 256c-6.19 0-13.12.43-20.59 1.17 24.75 17.82 41.92 41.82 41.92 73.5V384h128v-53.33c0-49.71-99.52-74.67-149.33-74.67z" /></svg>
              1,702
            </div>
            <div className="profile-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 469.33 469.33">
                <path d="M234.67 170.67c-35.31 0-64 28.69-64 64s28.69 64 64 64 64-28.7 64-64-28.7-64-64-64z" />
                <path d="M234.67 74.67C128 74.67 36.9 141 0 234.67c36.9 93.65 128 160 234.67 160 106.77 0 197.76-66.35 234.66-160-36.9-93.66-127.89-160-234.66-160zm0 266.66c-58.88 0-106.67-47.78-106.67-106.66S175.79 128 234.67 128s106.66 47.79 106.66 106.67-47.78 106.66-106.66 106.66z" /></svg>
              1,503
            </div>
            <div className="profile-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 475.43 475.43">
                <path d="M306.9 164.57l78.9-86.2a7.83 7.83 0 001.56-8.36 8.36 8.36 0 00-7.3-4.7h-253.4s-3.13 0-3.13.52v-9.4a26.12 26.12 0 0021.94-27.7A28.73 28.73 0 00117.26 0a29.78 29.78 0 00-29.78 28.73 30.82 30.82 0 0020.37 27.7v411.16a7.84 7.84 0 0015.68 0V263.84h256.52c3.2.2 6.17-1.7 7.31-4.7a8.36 8.36 0 00-1.56-8.36l-78.9-86.2z" /></svg>
              Sep 21
            </div>
            <div className="profile-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 411.14 411.14">
                <path d="M350.2 54.53H61.45C27.64 54.53 0 82.18 0 115.97v179.2c0 33.8 27.65 61.44 61.44 61.44H349.7c33.79 0 61.44-27.65 61.44-61.44v-179.2c.5-33.8-27.14-61.44-60.93-61.44zM287.75 210.7a11.96 11.96 0 01-3.58 3.59l-119.3 70.65a9.93 9.93 0 01-13.82-3.58 8.65 8.65 0 01-1.54-5.12V134.92c0-5.64 4.61-10.24 10.24-10.24 1.54 0 3.59.5 5.12 1.53l119.3 70.66c4.6 3.07 6.66 9.21 3.58 13.82z" /></svg>
              234
            </div>
          </div>
          <div className="profile-menu">
            <div className="profile-avatar">
              <img className="profile-img" src="https://images.unsplash.com/photo-1503275951620-83f8a32f7884?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="" />
              <div className="profile-name">Phoebe Allison</div>
            </div>
            <div className="menu-items">
              <a className="profile-menu-link ">Main</a>
              <a className="profile-menu-link active">내활동</a>
              <a className="profile-menu-link">인증</a>
            </div>
            <div className="follow-buttons">
              <button className="follow">6</button>
              <button className="follow follow-option">Follow</button>
            </div>
          </div>
        </div>
        <div className="trends">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 50" fill="currentColor">
              <path d="M5.03 12h-5v38h56V12h-5zm31.999 20.262l-12.951 7.521a2.02 2.02 0 01-2.04.004 1.984 1.984 0 01-1.008-1.735V23.01c0-.724.377-1.372 1.008-1.735a2.047 2.047 0 012.04.003L37.029 28.8a1.983 1.983 0 011.001 1.731c0 .719-.374 1.366-1.001 1.731z" data-original="#000000" className="active-path" />
              <path d="M23.03 38.051v.004l12.994-7.524-12.951-7.525zM12.03 0h32v4h-32zM50.03 6h-44v4h44z" data-original="#000000" className="active-path" /></svg>
            See what's my activity
          </a>
          <div className="follow-buttons">
            <button className="follow">이전</button>
            <button className="follow follow-option active">다음</button>
          </div>
        </div>
        <div className="videos">
          <div className="video">
            <div className="picture">15.13</div>
            <video muted>
              <img src type="picture" />
            </video>
            <div className="video-content">Planning Helps Make</div>
            <div className="view">15.4k views</div>
          </div>
          <div className="video">
            <div className="video-time">13.10</div>
            <video muted>
              <source src="https://player.vimeo.com/external/356200184.sd.mp4?s=f528556cafba1d369984dc341104e7eef8bb71bb&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="video-content">This Is Cloaud Break</div>
            <div className="view">13.2k views</div>
          </div>
          <div className="video">
            <div className="video-time">15.30</div>
            <video muted>
              <source src="https://player.vimeo.com/external/364324653.sd.mp4?s=7ded2b451ac7f5dfaf1375277aa0308cdf5d011c&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="video-content">Lost Your Mind</div>
            <div className="view">11.7k views</div>
          </div>
          <div className="video">
            <div className="video-time">11.30</div>
            <video muted>
              <source src="https://player.vimeo.com/external/399004885.sd.mp4?s=1d39443bef9856dacc4d3ba2c6be0881e38b7e66&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="video-content">Planning Helps Make</div>
            <div className="view">9.2k views</div>
          </div>
          <div className="video">
            <div className="video-time">6.35</div>
            <video muted>
              <source src="https://player.vimeo.com/external/353556576.sd.mp4?s=8e942d8680fe908418143e63e04b8798982d5bea&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="video-content">Research In Advertising</div>
            <div className="view">18.4k views</div>
          </div>
          <div className="video">
            <div className="video-time">2.21</div>
            <video muted>
              <source src="https://player.vimeo.com/external/368556609.sd.mp4?s=3fa896a1d6d8c04382a9b8f33053d2eaabe4342b&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="video-content">See The Unmatched</div>
            <div className="view">3.4k views</div>
          </div>
          <div className="video">
            <div className="video-time">12.10</div>
            <video muted>
              <source src="https://player.vimeo.com/external/285489976.sd.mp4?s=4fa6461f93f18e0d6cfc30461fffb05311d60a28&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="video-content">Dance In The Air</div>
            <div className="view">17.4k views</div>
          </div>
          <div className="video">
            <div className="video-time">7.50</div>
            <video muted>
              <source src="https://player.vimeo.com/external/325725646.sd.mp4?s=763c0f293299052689f8344b3a155ea2b4a1c92b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="video-content">Sadness Will Last Forever</div>
            <div className="view">12.6k views</div>
          </div>
        </div>
        <div className="load-more">
          <svg id="me" xmlns="http://w3.org/2000/svg" viewBox="0 0 341.333 341.333" fill="currentColor">
            <path d="M341.227 149.333V0l-50.133 50.133C260.267 19.2 217.707 0 170.56 0 76.267 0 .107 76.373.107 170.667s76.16 170.667 170.453 170.667c79.467 0 146.027-54.4 164.907-128h-44.373c-17.6 49.707-64.747 85.333-120.533 85.333-70.72 0-128-57.28-128-128s57.28-128 128-128c35.307 0 66.987 14.72 90.133 37.867l-68.8 68.8h149.333z" />
          </svg>
          Load More
        </div>
        <div className="footer">
          <div className="footer-row">
            <div className="footer-links">
            </div>
          </div>
          <div className="footer-row">
          </div>
        </div>
      </div>
      <div className="footer-last">
      </div>
    </div>
  </div>
  );
}
export default Home;
