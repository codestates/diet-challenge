import React from "react";
import MainPost from "../mainpost";
import MyPost from "./myposts";
import { Link } from "react-router-dom";

function MyPosts() {
  return (
    <div className="main">
      <div className="row">
         <div class="follow-buttons">
     <button class="follow">이전</button>
     <button class="follow follow-option active">다음</button>
    </div> 
    <div className="grid-image">
         <MyPost />      
         <MyPost />      
         <MyPost />      
         <MyPost />      
         <MyPost />      
         <MyPost />      
      </div>    
     </div>
    
   
    </div>

  );
}
export default MyPosts;
