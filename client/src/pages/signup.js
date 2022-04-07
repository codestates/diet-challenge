import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
          "https://localhost:4000/users/check",
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
          "https://localhost:4000/users/check",
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
          "https://localhost:4000/users/signup",
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
    <div>
      <center>
        <h1>회원가입</h1>
        <div>모든 항목은 필수입니다</div>
        <form className="singupbox" onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>id</span>
            <input type="id" onChange={handleInputValue("userid")} />
            <button className="uniqueckeck" type="butten" onClick={idCkeck}>
              중복검사
            </button>
          </div>
          <div>
            <span>비밀번호</span>
            <input type="password" onChange={handleInputValue("password")} />
          </div>
          <div>
            <span>비밀번호 확인</span>
            <input
              type="password"
              onChange={handleInputValue("passwordcheck")}
            />
          </div>
          <div>
            <span>닉네임</span>
            <input type="text" onChange={handleInputValue("usernickname")} />
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
            <span>나의 목표</span>
            <input type="text" onChange={handleInputValue("goal")} />
          </div>

          <button
            className="btn btn-signup"
            type="submit"
            onClick={handleSignup}
          >
            회원가입
          </button>
        </form>
      </center>
    </div>
  );
}
export default Signup;
