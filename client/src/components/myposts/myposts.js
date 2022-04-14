import React from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux"

function MyPost() {
  return (
<section className="popup popup-picture">
  <form className="popup-picture_case">
    
    <div className="card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHrmpzOG2EyzjEXAFocxaOc4OmSY33_vDXA&usqp=CAU" className="card_image" alt="2002 강아지와" />
  <div className="card_photo-name">
    <p className="card_photo-title">
      강아지와 산책 
    </p>
  </div>
      </div>
  </form>
   </section> 
  );
}
export default MyPost;
