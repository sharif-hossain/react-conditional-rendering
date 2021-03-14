import React from "react";
import "./TwitterHead.css";

const TwitterHead = () => {
  return (
    <div className="tweet-header">
      <img
        src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=90&auto=webp"
        alt="avatar"
      />
      <div>
        <span className="tweet-header__name">Sharif Hossain</span>
        <span className="tweet-header__user">@sharif-hossain</span>
      </div>
    </div>
  );
};

export default TwitterHead;
