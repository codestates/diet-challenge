import React from "react";
import FriendPost from "./friendpost";
import MainPost from "./mainpost";
import { useSelector } from "react-redux";

function Body() {
  const friendslatest = useSelector((state) => state.userreducer.friendslatest);

  return (
    <div>
      <MainPost />

      {friendslatest.map((el) => {
        return (
          <FriendPost
            id={el.id}
            goal={el.goal}
            content={el.content}
            photo={el.photo}
          />
        );
      })}
    </div>
  );
}
export default Body;
