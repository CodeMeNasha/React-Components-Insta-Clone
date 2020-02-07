// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
 const [comment, setComment] = useState();
 console.log(props)
  return (
    <div>
      {props.comments.map(apple => <Comment comment={apple}/>)}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
