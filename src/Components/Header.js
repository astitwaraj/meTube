import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Hamburger } from "../Images/hamburger-menu.svg";
import { ReactComponent as Noti } from "../Images/notifications.svg";
import Profile from "../Images/profileLogo.jpg";
import { ReactComponent as Search } from "../Images/search.svg";
import { ReactComponent as Recorder } from "../Images/upload.svg";
import { ReactComponent as Mic } from "../Images/voice-search-icon.svg";
import { ReactComponent as Logo } from "../Images/youtube-logo.svg";
import { AUTO_COMPLETE_API } from "../Utils/const";
import { toggle } from "../Utils/sidebarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(toggle());
  };
  const [query, setquery] = useState("");

  const [suggestion, setsuggestion] = useState([]);
  const [showsuggestion, setshowsuggestion] = useState(false);
  const getSuggestion = async () => {
    const data = await fetch(AUTO_COMPLETE_API + query);
    const json = await data.json();
    setsuggestion(json[1]);
  };
  useEffect(() => {
    const timer = setTimeout(() => getSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  return (
    <>
      <div className="flex flex-row items-center w-screen px-4 py-1 sticky top-0 bg-white ">
        <button
          onClick={handleSidebar}
          className="w-11 rounded-full p-2 active:bg-gray-300 hover:bg-gray-200"
        >
          <Hamburger />
        </button>
        <div className="w-28 m-4">
          <Logo />
        </div>
        <div className="basis-4/5 flex justify-center mx-5">
          <input
            className="font-semibold text-gray-700 w-3/6 border-[1.5px] focus:outline-1 outline-gray-200 shadow-sm rounded-l-3xl px-3 active:"
            type=""
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setquery(e.target.value);
            }}
            onFocus={() => {
              setshowsuggestion(true);
            }}
          />

          <div className="px-4 border-[1.5px] rounded-r-3xl active:bg-gray-300 hover:bg-gray-200 mr-3">
            <button className="w-11 p-2  ">
              <Search />
            </button>
          </div>
          <button className="w-[40px] rounded-full p-2 active:bg-gray-300 mx-2 bg-gray-200">
            <Mic />
          </button>
        </div>
        <button className="w-11 rounded-full p-2 active:bg-gray-300 hover:bg-gray-200 mx-6 ">
          <Recorder />
        </button>
        <button className="w-11 rounded-full p-2 active:bg-gray-300 hover:bg-gray-200">
          <Noti />
        </button>
        <button>
          <img
            className="w-10 rounded-full p-2 active:bg-gray-300 hover:bg-gray-200 mx-6"
            src={Profile}
            alt=""
          />
        </button>
      </div>
      {query && showsuggestion && (
        <div className="bg-white fixed left-[26rem] w-[533px] rounded-2xl  py-1 shadow-md">
          {suggestion.map((text, index) => (
            <ul
              className="px-3 py-1 hover:bg-gray-200 cursor-pointer "
              onClick={() => {
                setquery(text);
                setshowsuggestion(false);
              }}
              key={index}
            >
              {text}
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
