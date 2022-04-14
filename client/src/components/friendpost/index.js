import React from "react";

function FriendPost({ info, img }) {
  return (
        <form className="grid-image">    
            <img
              src={`${process.env.REACT_APP_API_URL}${img}`}
              className="card_image"
            />
            <p className="card_photo-title2">{info}</p>
        </form>


  );
}
export default FriendPost;
