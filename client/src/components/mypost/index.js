import React, { useEffect, useState } from "react";

const CreatePost = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [imgInfo, setImgInfo] = useState("");
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

  const newpost = (e) => {
    setImgInfo(e.target.value);
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
      <input type="textarea" onChange={newpost} />
      <button>글 작성하기</button>
    </main>
  );
};

export default CreatePost;
