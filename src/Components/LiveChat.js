import React from "react";

import { useSelector } from "react-redux";
import useLiveChat from "../useHooks/useLiveChat";
import ChatMessages from "./ChatMessages";
export const LiveChat = () => {
  const chatData = useSelector((store) => store.chat.conversation);
  useLiveChat();
  return (
    <>
      <div className="flex flex-col-reverse">
        {chatData.map((message, index) => (
          <ChatMessages key={index} name={message.name} text={message.text} />
        ))}
      </div>
    </>
  );
};
