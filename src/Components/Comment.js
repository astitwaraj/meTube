import React, { useState } from "react";
import ActionBttn from "./ActionBttn";

const Comment = ({ addReply, comment }) => {
  const [replyBox, setreplyBox] = useState(false);
  const [replyText, setreplyText] = useState("");
  const handleReplybtn = () => {
    setreplyBox(!replyBox);
  };
  const handleSavebtn = () => {
    addReply(comment.id, replyText);
    setreplyBox(false);
    setreplyText("");
  };
  const handleCanclebtn = () => {
    setreplyBox(false);
    setreplyText("");
  };
  return (
    <>
      <div>
        <ul key={comment.id}>
          {comment.display}
          <br />
          {!replyBox && (
            <ActionBttn action={"Reply"} handleClick={handleReplybtn} />
          )}
          {replyBox && (
            <>
              <br />
              <textarea
                value={replyText}
                cols="120"
                rows="1"
                className="border-b-2 border-gray-300 focus:outline-none"
                onChange={(e) => setreplyText(e.target.value)}
              ></textarea>
              <br />
              <ActionBttn action={"Save"} handleClick={handleSavebtn} />
              <span className="mx-1"></span>
              <ActionBttn action={"Cancel"} handleClick={handleCanclebtn} />
            </>
          )}
          <ul className="ml-10">
            {comment.children.length > 0 &&
              comment.children.map((childComment) => (
                <Comment
                  key={childComment.id}
                  addReply={addReply}
                  comment={childComment}
                />
              ))}
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Comment;
