import React, { useEffect, useState } from "react";
import MyPost from "./myposts";
import { useSelector } from "react-redux";
import axios from "axios";

function MyPosts() {
  const [offset, setoffset] = useState(0);
  const [posts, setposts] = useState([]);
  const [hasnext, sethasnext] = useState(false);

  const accessToken = useSelector((state) => state.userreducer.accessToken);

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(
        `http://localhost:4000/posts?offset=${offset}&limit=6`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
=======
      .get(`${process.env.REACT_APP_API_URL}/posts?offset=${offset}&limit=6`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        "Content-Type": "application/json",
        withCredentials: true,
      })
>>>>>>> 3f7666ca2f8cc6114601c7914816395c97e4ecd1
      .then((data) => {
        setposts(data.data.data.posts);
        sethasnext(data.data.data.hasNext);
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
