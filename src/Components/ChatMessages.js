import React from "react";
import CommentPic from "../Images/comment_user.png";

const ChatMessages = ({ name, text }) => {
  return (
    <div className="flex flex-row m-2 items-center">
      <div>
        <img className="w-4 mx-1" src={CommentPic} alt="" />
      </div>
      <div>
        <span className="font-semibold text-sm">{name}</span>
      </div>
      <div>
        <span className="text-sm mx-2">{text}</span>
      </div>
    </div>
  );
};

export default ChatMessages;
