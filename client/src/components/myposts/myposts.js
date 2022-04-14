import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function MyPost({ id, goal, photo, content }) {
  return (
    <section className="popup popup-picture">
      <form className="popup-picture_case">
        <div className="card">
          <img
            src={`${process.env.REACT_APP_API_URL}${photo}`}
            className="card_image"
            alt="2002 강아지와"
          />
          <div className="card_photo-name">
            <p className="card_photo-title">{content}</p>
          </div>
        </div>
      </form>
    </section>
  );
}
export default MyPost;
