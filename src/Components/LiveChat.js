import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { saveChat } from "../Utils/chatSlice";
import generateName from "../useHooks/randomName";
import generateText from "../useHooks/randomString";
import ChatMessages from "./ChatMessages";
export const LiveChat = () => {
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.chat.conversation);
  useEffect(() => {
    const timedChat = setInterval(() => {
      dispatch(
        saveChat({
          name: generateName(),
          text: generateText(10),
        })
      );
    }, 500);
    return () => {
      clearInterval(timedChat);
    };
  }, []);
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
