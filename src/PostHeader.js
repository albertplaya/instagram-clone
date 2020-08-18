import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./PostHeader.css";

const PostHeader = ({username}) => {
  return (
    <div className="post__header">
      <Avatar
        className="post_avatar"
        alt="avatar"
        src="https://pbs.twimg.com/profile_images/1017730789025439744/eLCyHZQ0_400x400.jpg"
      />
      <h3>{username}</h3>
    </div>
  );
};

export default PostHeader;
