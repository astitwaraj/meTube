import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { G_KEY, VIDEO_DETAIL } from "../Utils/const";
import { addNowPlaying } from "../Utils/currvidSlice";

const useVideoPage = (id) => {
  const dispatch = useDispatch();
  const getDetails = async () => {
    const data = await fetch(VIDEO_DETAIL + id + "&key=" + G_KEY);
    const json = await data.json();
    dispatch(addNowPlaying(json.items[0]));
  };
  useEffect(() => {
    getDetails();
  }, [id]);
};

export default useVideoPage;
