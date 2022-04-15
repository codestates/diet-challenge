import React from "react";
import FriendPost from "./friendpost";
import MainPost from "./mainpost";
import { useSelector } from "react-redux";

function Body() {
  const friendslatest = useSelector((state) => state.userreducer.friendslatest);

  return (
    <div className="gallery">
      <div className="member1">나의 최근 포스트</div>
      <MainPost />
      <div className="member1">친구의 활동</div>
      {friendslatest.map((el) => {
        return (
          <FriendPost id={el.id} goal={el.goal} info={el.info} img={el.img} />
        );
      })}
    </div>
  );
}
export default Body;
