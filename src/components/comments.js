import React, { useState } from "react";
import SingleComment from "./singleComment";

const Comments = () => {
  const [comments, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED SOMETHING");
  };

  return (
    <div className='p-20 bg-green-600'>
      <form onSubmit={handleSubmit} className='comment-form bg-gray-300 p-10'>
        <input
          type='textarea'
          placeholder='Add a comments..'
          onChange={(e) => setComment(e.target.value)}
        />
        <button type='submit'>SEND</button>
      </form>
    </div>
  );
};

export default Comments;
