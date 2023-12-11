import React, { useState } from "react";
import ActionBttn from "./ActionBttn";
import Comment from "./Comment";
const Comments = () => {
  let [commentInput, setcommentInput] = useState("");
  let [comments, setComments] = useState([]);
  const handleSubmit = () => {
    if (commentInput === "") return;
    setComments([newComment(commentInput), ...comments]);
    setcommentInput("");
  };
  const addReply = (comentId, replyText) => {
    let newCommentList = [...comments];
    insertComment(newCommentList, comentId, replyText);
    setComments(newCommentList);
  };
  const newComment = (text) => {
    return {
      id: new Date().getTime(),
      display: text,
      children: [],
    };
  };
  const insertComment = (comments, parentId, text) => {
    for (let i = 0; i < comments.length; i++) {
      let c = comments[i];
      if (c.id === parentId) {
        c.children.unshift(newComment(text));
      }
    }
    for (let i = 0; i < comments.length; i++) {
      let c = comments[i];
      insertComment(c.children, parentId, text);
    }
  };
  return (
    <div className="mt-7">
      <div className="mb-7">Comments</div>
      <textarea
        value={commentInput}
        cols="120"
        rows="1"
        className="border-b-2 border-gray-300 focus:outline-none"
        onChange={(e) => setcommentInput(e.target.value)}
      ></textarea>
      <br />

      <ActionBttn action={"Submit"} handleClick={handleSubmit} />
      <br />

      {comments.map((comment) => (
        <div className="mt-3">
          <Comment key={comment.id} addReply={addReply} comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
