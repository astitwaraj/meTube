import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { DISPLAY_VID } from "../Utils/const";
import formatdate from "../useHooks/convertDate";
import viewsFormat from "../useHooks/convertViews";
import useVideoPage from "../useHooks/useVideoPage";
import Comments from "./Comments";

const WatchPage = () => {
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
  );
};

export default WatchPage;
