import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveChat } from "../Utils/chatSlice";
import generateName from "./randomName";
import generateText from "./randomString";

const useLiveChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timedChat = setInterval(() => {
      dispatch(
        saveChat({
          name: generateName(),
          text: generateText(15),
        })
      );
    }, 500);
    return () => {
      clearInterval(timedChat);
    };
  }, []);
};

export default useLiveChat;
