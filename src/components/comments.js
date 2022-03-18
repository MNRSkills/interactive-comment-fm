import React, { useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("THIS HANDLE WORKS", comment);
  };
  return (
    <form onSubmit={handleSubmit} className='comment-form'>
      <input
        type='textarea'
        placeholder='Add a comments..'
        onChange={(e) => setComment(e.target.value)}
      />
      <button type='submit'>SEND</button>
    </form>
  );
};

export default Comments;
