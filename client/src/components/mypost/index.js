import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setImg } from "../../actions/index";
import { Modal } from "../modal";

const CreatePost = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [photo, setPhoto] = useState(""); //추가
  const [imgInfo, setImgInfo] = useState("");
  const [alertmessage, setalertmessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goal = useSelector((state) => state.userreducer.userInfo.nowGoal);
  const accessToken = useSelector((state) => state.userreducer.accessToken);

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const newPost = (e) => {
    setImgInfo(e.target.value);
  };

  const handleNewPost = () => {
    if (imageSrc === "" || imgInfo === "") {
      setalertmessage("이미지와 글을 작성해주세요");
      openModal();
    } else {
      const formdata = new FormData();
      formdata.append("img", photo);
      formdata.append("info", imgInfo);
      formdata.append("goal", goal);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      axios
        .post(`${process.env.REACT_APP_API_URL}/posts/create`, formdata, config)
        .then((post) => {
          navigate("/");
        })
        .catch(() => {
          alert("err");
        });
    }
  };

  return (
    <main className="container">
      {" "}
      <h2>이미지 미리보기</h2>{" "}
      {/* <p>추가한 사진 <img src="http://localhost:4000/image/43793e4cc63cda2a3f7cf05ff7931b7f" /></p> */}
      <input
        type="file"
        onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
          setPhoto(e.target.files[0]);
        }}
      />{" "}
      <div className="preview">
        {" "}
        {imageSrc && <img src={imageSrc} alt="preview-img" />}{" "}
      </div>{" "}
      <input type="textarea" onChange={newPost} />
      <button onClick={handleNewPost}>글 작성하기</button>
      <Modal open={modalOpen} close={closeModal}>
        {alertmessage}
      </Modal>
    </main>
  );
};

export default CreatePost;
