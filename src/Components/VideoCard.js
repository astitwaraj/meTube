import React from "react";
import formatdate from "../useHooks/convertDate";
import viewsFormat from "../useHooks/convertViews";

const VideoCard = ({ video }) => {
  if (!video) return null;

  const { statistics, snippet } = video;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="m-4 pt-5 w-[320px] flex flex-col">
      <div className="">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      </div>
      <div className="flex flex-col pr-4 pl-1">
        <div className="font-semibold line-clamp-2 my-1">{title}</div>
        <div className="text-sm text-gray-600 font-semibold">
          {channelTitle}
        </div>
        <div className="text-xs text-gray-600 my-1 font-semibold">
          {viewsFormat(statistics.viewCount)} &#x2022;{" "}
          {formatdate(snippet.publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
