import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

function Signup() {
  const [userinfo, setuserinfo] = useState({
    userid: "",
    password: "",
    passwordcheck: "",
    usernickname: "",
    goal: "",
  });
  const [uniqueid, setuniqueid] = useState(false);
  const [uniquenickname, setuniquenickname] = useState(false);

  const navigate = useNavigate();

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const idCkeck = () => {
    //서버로 axios 요청
    if (userinfo.userid.length < 1) {
      alert("id를 입력해주세요");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/users/check`,
          { userid: userinfo.userid },
          { "Content-Type": "application/json" }
        )
        .then(() => {
          return setuniqueid(true);
        })
        .catch(() => {
          alert("사용할 수 없는 아이디 입니다.");
        });
    }
  };
  const nicknameCheck = () => {
    if (userinfo.usernickname.length < 1) {
      alert("닉네임을 입력해주세요");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/users/check`,
          { nickname: userinfo.usernickname },
          { "Content-Type": "application/json" }
        )
        .then(() => {
          return setuniquenickname(true);
        })
        .catch(() => {
          alert("사용할 수 없는 닉네임 입니다.");
        });
    }
  };
  const handleSignup = () => {
    console.log(userinfo);
    console.log(uniqueid);
    console.log(uniquenickname);
    if (uniqueid === false) {
      alert("id 중복검사를 해 주세요.");
    } else if (userinfo.password.length < 8) {
      alert("비밀번호는 8자리 이상이어야 합니다.");
    } else if (userinfo.password !== userinfo.passwordcheck) {
      alert("비밀번호가 일치해야합니다.");
    } else if (uniquenickname === false) {
      alert("닉네임 중복검사를 해 주세요.");
    } else if (userinfo.goal === "") {
      alert("나의 목표를 입력해 주세요.");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/users/signup`,
          {
            id: userinfo.userid,
            password: userinfo.password,
            nickname: userinfo.nickname,
            goal: userinfo.goal,
          },
          { "Content-Type": "application/json" }
        )
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          alert("다시 시도해 주세요");
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
        </div>
      </div>
      <div className="wrap">
        <div className="form-wrap">
          <div className="bottom-wrap">
            <h1 className="member">회원가입</h1>
            <h3 className="member1">모든 항목은 *필수입니다</h3>
            <form className="singupbox" onSubmit={(e) => e.preventDefault()}>
              <div>
                <form id="newMember" action="" className="input-group"></form>
                <input
                  type="text"
                  id="username"
                  className="input-field"
                  placeholder="아이디를 입력해주세요"
                  required
                  onChange={handleInputValue("userid")}
                />
                <button className="uniqueckeck" type="butten" onClick={idCkeck}>
                  중복검사
                </button>
              </div>
              <div>
                <input
                  type="password1"
                  id="password"
                  className="input-field"
                  placeholder="비밀번호를 입력하세요"
                  required
                  onChange={handleInputValue("password")}
                />
              </div>
              <div>
                <input
                  type="password1"
                  className="input-field"
                  placeholder="비밀번호를 입력하세요"
                  onChange={handleInputValue("passwordcheck")}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="newMember"
                  className="input-field"
                  placeholder="닉네임을 입력해주세요"
                  onChange={handleInputValue("usernickname")}
                />
                <button
                  className="uniqueckeck"
                  type="butten"
                  onClick={nicknameCheck}
                >
                  중복검사
                </button>
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  id="newMember"
                  className="input-field"
                  placeholder="나의 목표"
                  onChange={handleInputValue("goal")}
                />
              </div>
              <button className="submit" type="submit" onClick={handleSignup}>
                확인
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
