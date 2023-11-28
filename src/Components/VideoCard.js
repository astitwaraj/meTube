import React from "react";

const VideoCard = ({ video }) => {
  if (!video) return null;

  const { statistics, snippet } = video;
  const { channelTitle, description, thumbnails, title } = snippet;
  return (
    <div className="m-4 w-[320px] flex flex-col">
      <div className="">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      </div>
      <div className="flex flex-col pr-4 pl-1">
        <div className="font-semibold line-clamp-2 my-2">{title}</div>
        <div className="text-sm font-semibold">{channelTitle}</div>
        <div className="text-xs">{statistics.viewCount}</div>
      </div>
    </div>
  );
};

export default VideoCard;
