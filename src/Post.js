import React from "react";
import "./Post.css";
import PostHeader from "./PostHeader";

const Post = ({username, caption, imageUrl}) => {
  return (
    <div className="post">
      <PostHeader username={username} />
      <img className="post__image" src={imageUrl} />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
};

export default Post;
