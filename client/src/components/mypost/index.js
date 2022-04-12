import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setImg } from "../../actions/index";
import { Modal } from "../modal";

const CreatePost = () => {
  const [imageSrc, setImageSrc] = useState("");
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

  const goal = useSelector((state) => state.userreducer.userinfo.goal);
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
      formdata.append("img", imageSrc);
      formdata.append("info", imgInfo);
      formdata.append("goal", goal);

      const config = {
        Headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      axios
        .post(`${process.env.REACT_APP_API_URL}/users/signup`, formdata, config)
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          alert("err");
        });
    }
    dispatch(setImg(imageSrc));
    navigate("/");
  };

  return (
    <main className="container">
      {" "}
      <h2>이미지 미리보기</h2>{" "}
      <input
        type="file"
        onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
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
