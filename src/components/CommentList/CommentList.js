import React from "react";
import "./CommentList.css";

const CommentList = ({ comment }) => {
  return (
    <div key={comment.user} className="tweet-comment">
      <span className="tweet-comment__name">{comment.name}</span>
      <span className="tweet-comment__user">{comment.user}</span>
      <p id="para">{comment.text}</p>
    </div>
  );
};

export default CommentList;
