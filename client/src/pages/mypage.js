import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../components/modal";
import { setMainPage, setLogin, setAccessToken } from "../actions/index";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function Mypage() {
  const [isChange, setIsChange] = useState(false);
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [alertmessage, setalertmessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [nickname, setnickname] = useState("");
  const [goal, setgoal] = useState("");
  const [deletetext, setdeletetext] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userinfo = useSelector((state) => state.userreducer.userinfo);
  const accessToken = useSelector((state) => state.userreducer.accessToken);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = () => {
    setIsChange(!isChange);
  };
  const handlepassword1 = (e) => {
    setpassword1(e.target.value);
  };
  const handlepassword2 = (e) => {
    setpassword2(e.target.value);
  };
  const handlenickname = (e) => {
    setnickname(e.target.value);
  };
  const handlegoal = (e) => {
    setgoal(e.target.value);
  };
  const handledelete = (e) => {
    setdeletetext(e.target.value);
  };

  const changepassword = () => {
    if (password1 === "" || password2 === "") {
      setalertmessage("변경할 비밀번호를 입력해주세요");
      openModal();
    } else if (password1 !== password2) {
      setalertmessage("비밀번호가 일치하지 않습니다");
      openModal();
    } else if (password1.length < 8) {
      setalertmessage("비밀번호는 8자리 이상이어야 합니다.");
      openModal();
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/mypage/infochange`,
          {
            password: password1,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
          { "Content-Type": "application/json" }
        )
        .then((data) => {
          dispatch(setAccessToken(data.data.data.accessToken));
          setalertmessage("비밀번호가 변경되었습니다");
          openModal();
        })
        .catch(() => {
          setalertmessage("오류");
          openModal();
        });
    }
  };

  const changenickname = () => {
    console.log(nickname);
    if (nickname === "") {
      setalertmessage("변경할 닉네임 입력해주세요");
      openModal();
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/mypage/infochange`,
          {
            usernickname: nickname,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
          { "Content-Type": "application/json" }
        )
        .then((data) => {
          dispatch(
            setMainPage({
              userinfo: {
                usernickname: nickname,
              },
            })
          );
          dispatch(setAccessToken(data.data.data.accessToken));
          setalertmessage("닉네임이 변경됐습니다");
          openModal();
        })
        .catch(() => {
          setalertmessage("사용할 수 없는 닉네임입니다");
          openModal();
        });
    }
  };

  const changegoal = () => {
    console.log(goal);
    if (goal === "") {
      setalertmessage("변경할 목표를 입력해주세요");
      openModal();
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/mypage/infochange`,
          {
            goal: goal,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
          { "Content-Type": "application/json" }
        )
        .then((data) => {
          dispatch(
            setMainPage({
              userinfo: {
                goal: goal,
              },
            })
          );
          dispatch(setAccessToken(data.data.data.accessToken));
          setalertmessage("목표가 변경됐습니다");
          openModal();
        })
        .catch(() => {
          setalertmessage("오류");
          openModal();
        });
    }
  };

  const deleteid = () => {
    if (deletetext !== "회원탈퇴") {
      setalertmessage("입력창에 회원탈퇴 를 입력 해 주세요");
      openModal();
    } else {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/users/withdrawal`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
          { "Content-Type": "application/json" }
        )
        .then(() => {
          dispatch(setLogin());
          navigate("/");
        })
        .catch(() => {
          alert("오류");
        });
    }
  };

  return isChange ? (
    <div>
      <div className="mypageContainer">
        <div>
          <h1 className="title">Mypage</h1>
        </div>

        <div className="item">
          나의 비밀번호:{" "}
          <input type="password" onChange={handlepassword1}></input>
        </div>
        <div className="item">
          나의 비밀번호 확인:{" "}
          <input type="password" onChange={handlepassword2}></input>
          <button onClick={changepassword}>정보 수정</button>
        </div>
        <div className="item">
          나의 닉네임: <input type="text" onChange={handlenickname}></input>
          <button onClick={changenickname}>정보 수정</button>
        </div>
        <div className="item">
          나의 목표: <input type="text" onChange={handlegoal}></input>
          <button onClick={changegoal}>정보 수정</button>
        </div>
        <button onClick={handleChange}>수정완료</button>
      </div>
      <Modal open={modalOpen} close={closeModal}>
        {alertmessage}
      </Modal>
    </div>
  ) : (
    <div className="mypageContainer">
      <div>
        <h1 className="title">Mypage</h1>
      </div>
      <div className="item">나의 id: {userinfo.userid}</div>
      <div className="item">나의 닉네임: {userinfo.usernickname}</div>
      <div className="item">나의 목표: {userinfo.goal}</div>
      <button onClick={handleChange}>정보 수정</button>
      <div className="item">
        회원 탈퇴 확인: <input type="text" onChange={handledelete}></input>
      </div>
      <button onClick={deleteid}>회원탈퇴</button>
      <Modal open={modalOpen} close={closeModal}>
        {alertmessage}
      </Modal>
    </div>
  );
}
export default Mypage;
