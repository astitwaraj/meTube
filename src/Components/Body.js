import React, { useEffect } from 'react';
import { VIDEO_API } from '../Utils/const';

const Body = () => {
  const videos = async() => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    console.log(json)
  }
  useEffect(() => {
    videos()
  },[])
  return (
    <div>Body</div>
  )
}

export default Body