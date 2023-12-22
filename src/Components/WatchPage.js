import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { saveChat } from "../Utils/chatSlice";
import { DISPLAY_VID } from "../Utils/const";
import formatdate from "../useHooks/convertDate";
import viewsFormat from "../useHooks/convertViews";
import useVideoPage from "../useHooks/useVideoPage";
import Comments from "./Comments";
import { LiveChat } from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [chatInput, setchatInpur] = useState("");
  const [desView, setdesView] = useState(false);
  const [vidId] = useSearchParams();
  useVideoPage(vidId.get("v"));
  const details = useSelector((store) => store.video?.currentVideo);
  if (details.loading) return null;
  const { snippet, statistics } = details.videoData;
  const handleOnclick = () => {
    setdesView(!desView);
  };
  return (
    <div className="flex flex-row">
      <div className=" flex flex-col m-4 w-[1000px]">
        <div>
          <iframe
            className="rounded-xl"
            width="1000"
            height="580"
            src={DISPLAY_VID + vidId.get("v") + `?&vq=hd1080&autoplay=1&&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
        <div className=" px-1 my-4 font-semibold text-lg">
          <h1>{snippet.title}</h1>
        </div>
        <div className=" px-1 -mt-2  font-semibold">
          <h1>{snippet.channelTitle}</h1>
        </div>
        <div className=" px-1  font-semibold">
          <h1>{statistics.channelTitle}</h1>
        </div>
        <div className=" px-1  font-semibold text-sm my-1 text-gray-700">
          {viewsFormat(statistics.viewCount)} &#x2022;{" "}
          {formatdate(snippet.publishedAt)}
        </div>
        <div className="my-2 bg-gray-200 p-4 rounded-xl">
          <p className="font-semibold">Description:</p>
          <div className={desView ? `` : `line-clamp-2`}>
            {snippet.description}
          </div>

          <button className="font-semibold" onClick={handleOnclick}>
            {desView ? "less" : "more...."}
          </button>
        </div>
        <div>
          <Comments />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border m-4 mb-0 h-[530px] w-[350px] overflow-y-scroll scroll-smooth bg-gray-100 rounded-md">
          <LiveChat />
        </div>
        <div className="w-[350px] m-4 ">
          <input
            className=" rounded-md w-[17rem] h-9 p-2 border-[1.5px] focus:outline-1 outline-gray-300 shadow-sm active:"
            type="text"
            onChange={(e) => {
              setchatInpur(e.target.value);
            }}
          />
          <button
            className="bg-blue-400 font-semibold rounded-md ml-1 px-4 h-9"
            onClick={() => {
              dispatch(
                saveChat({
                  name: "Astitwa",
                  text: chatInput,
                })
              );
            }}
          >
            {" "}
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
