import React from 'react';
import './TweetBody.css';

const TweetBody = () => {
    return (
        <div className="tweet-body">
        <p>
          Let's talk about how to conditionally render elements within React! What
          options are available and when do you choose one over another?
        </p>
        <span className="tweet-body__time">10:30am · March 14, 2021</span>
      </div>
    );
};

export default TweetBody;