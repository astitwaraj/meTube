import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VIDEO_API } from "../Utils/const";
import VideoCard from "./VideoCard";

const Body = () => {
  const [Vid_deet, setVid_deet] = useState([]);
  const videos = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVid_deet(json.items);
  };
  useEffect(() => {
    videos();
  }, []);

  return (
    <div className="flex-1 flex flex-row flex-wrap">
      {Vid_deet.map((vidlist) => (
        <Link key={vidlist.id} to={"/watch?v=" + vidlist.id}>
          <VideoCard key={vidlist.id} video={vidlist} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
