import React from "react";

const SingleComment = ({ data }) => {
  console.log(data.currentUser);
  return (
    <div>
      {data.comments.map((comment, index) => {
        console.log("COMMENTS", comment);
      })}
    </div>
  );
};

export default SingleComment;
