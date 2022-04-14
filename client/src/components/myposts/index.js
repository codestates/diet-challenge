import React, { useEffect, useState } from "react";
import MyPost from "./myposts";
import { useSelector } from "react-redux";
import axios from "axios";

function MyPosts() {
  const [offset, setoffset] = useState(0);
  const [posts, setposts] = useState([
    {
      id: 8,
      goal: "8888",
      photo: null,
      content: "8888",
      user_id: 11,
      createdAt: "2022-04-12T09:48:28.000Z",
      updatedAt: "2022-04-12T09:48:28.000Z",
    },
    {
      id: 6,
      goal: "6666",
      photo: null,
      content: "6666",
      user_id: 11,
      createdAt: "2022-04-12T09:48:01.000Z",
      updatedAt: "2022-04-12T09:48:01.000Z",
    },
    {
      id: 3,
      goal: "3333",
      photo: null,
      content: "3333",
      user_id: 11,
      createdAt: "2022-04-12T09:47:16.000Z",
      updatedAt: "2022-04-12T09:47:16.000Z",
    },
  ]);
  const [hasnext, sethasnext] = useState(false);

  const accessToken = useSelector((state) => state.userreducer.accessToken);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts?offset=${offset}&limit=6`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((data) => {
        setposts(data.data.data.posts);
        sethasnext(data.data.data.hasnext);
      })
      .catch(() => {
        console.log("err");
      });
  }, [offset]);

  const handleback = () => {
    setoffset(offset - 6);
  };
  const handlefront = () => {
    setoffset(offset + 6);
  };

  return (
    <div className="main">
      <div className="row">
        <div class="follow-buttons">
          {offset === 0 ? null : (
            <button class="follow" onClick={handleback}>
              이전 사진
            </button>
          )}
          {hasnext ? (
            <button class="follow follow-option active" onClick={handlefront}>
              다음 사진
            </button>
          ) : null}
        </div>
        <div className="grid-image">
          {posts.map((el) => {
            return (
              <MyPost
                id={el.id}
                photo={el.photo}
                goal={el.goal}
                content={el.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MyPosts;
