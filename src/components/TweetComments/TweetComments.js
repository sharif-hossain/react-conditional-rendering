import React, { useState } from "react";
import './TweetComments.css';
import CommentList from "../CommentList/CommentList";

const If = ({conditional, component}) =>{
  if(conditional) return component;
   return null;
}

const withAuth = (Component) =>{
    if(localStorage.getItem("user")){
        return (props) => <Component {...props}/>;
    }
    return  ()=> <span>You must be authenticated</span>;
}
const TweetComments = withAuth(() => {
  const [show, setShow] = useState(true);
  const comments = [
    {
      name: "Andrew Anderson",
      user: "@anderson",
      text: "If / Else... return the entire value",
    },
    {
      name: "Brit Beckers",
      user: "@beckers",
      text: "Return null when you want nothing to render",
    },
    {
      name: "Corey Crimson",
      user: "@crimson",
      text: "Element variables: store JSX in a variable",
    },
    {
      name: "Dennis Dewey",
      user: "@dewey",
      text: "Ternaries, take your if statements inline",
    },
    {
      name: "Eric Eckersley",
      user: "@eckersley",
      text: "Short-Circuit && display if truthy",
    },
    {
      name: "Fred Farmer",
      user: "@farmer",
      text: "Immediately Invoked Function Expression",
    },
    {
      name: "Georgina Garland",
      user: "@garland",
      text: "Use sub-components when appropriate",
    },
    {
      name: "Hank Hacker",
      user: "@hacker",
      text: "Create your own If components",
    },
    {
      name: "Isabel Island",
      user: "@island",
      text: "HOCs to control whether component is rendered",
    },
  ];
  if(comments.length === 0)
  {
      return null;
  }

  let error;

  if(false)
  {
      error = <span id="error">There is an error. Please fix it.</span>
  }

    return (
        <div className="tweet-comments">
            {error}
          <div className="tweet-count">
            There are {comments.length} comments{" "}
            <button onClick={() =>setShow(!show)}>{show? 'hide':'show'}</button>
          </div>
          <If conditional={show} component={<ul>
            {comments.map((comment) => (
              <CommentList key={comment.user} comment={comment}></CommentList>
            ))}
          </ul> }>
          {/* {<ul>
            {comments.map((comment) => (
              <CommentList key={comment.user} comment={comment}></CommentList>
            ))}
          </ul> } */}
          </If>
          
        </div>
      );
  
});

export default TweetComments;
