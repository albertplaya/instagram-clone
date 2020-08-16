import React from "react";
import "./Post.css";
import PostHeader from "./PostHeader";

const Post = () => {
  return (
    <div>
      <PostHeader />
      <img
        className="post__image"
        src="https://i.chzbgr.com/full/9517451776/h8843E9DB/person-my-girl-wants-be-flash-halloween-thebedaz-zledunicorn"
      />
    </div>
  );
};

export default Post;
