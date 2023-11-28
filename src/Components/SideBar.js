import React from 'react';
import { useSelector } from 'react-redux';
import Exp from "../Images/explore.ico";
import Home from "../Images/home.ico";
import Lib from "../Images/library.ico";
import Ori from "../Images/originals.ico";
import Sub from "../Images/subscriptions.ico";
import App from "../Images/youtube-apps.ico";
import Mus from "../Images/youtube-music.ico";
const SideBar = () => {
  const x = useSelector((store)=>store.sidebar.show)
  return (
    <div className="flex flex-col">
      {x ? (
        <>
          <div className="mr-2">
            <div className="flex  active:bg-gray-300 hover:bg-gray-200 flex-col items-center m-1  rounded-2xl px-3 py-4">
              <img className="w-7  mb-2" src={Home} alt="" />
              <h1 className="text-xs font-semibold">Home</h1>
            </div>
            <div className="flex  active:bg-gray-300 hover:bg-gray-200 flex-col items-center m-1  rounded-2xl px-3 py-4">
              <img className="w-7 mb-2" src={Exp} alt="" />
              <h1 className="text-xs font-semibold">Explore</h1>
            </div>
            <div className="flex  active:bg-gray-300 hover:bg-gray-200 flex-col items-center m-1  rounded-2xl px-3 py-4">
              <img className="w-7  mb-2" src={Lib} alt="" />
              <h1 className="text-xs font-semibold">Library</h1>
            </div>
            {/* <div className="flex  active:bg-gray-300 hover:bg-gray-200 flex-col items-center m-1  rounded-2xl px-3 py-4">
        <img className="w-7 ml-[5px] mr-6 mb-2" src={Ori} alt="" />
        <h1 className="text-xs font-semibold">Orignals</h1>
      </div>
      <div className="flex  active:bg-gray-300 hover:bg-gray-200 flex-col items-center m-1  rounded-2xl px-3 py-4">
        <img className="w-7 ml-[5px] mr-6 mb-2" src={App} alt="" />
        <h1 className="text-xs font-semibold">Apps</h1>
      </div> */}
            <div className="flex  active:bg-gray-300 hover:bg-gray-200 flex-col items-center m-1  rounded-2xl px-3 py-4">
              <img className="w-7  mb-2" src={Mus} alt="" />
              <h1 className="text-xs font-semibold">Music</h1>
            </div>
            <div className="flex  active:bg-gray-300 hover:bg-gray-200 flex-col items-center m-1  rounded-2xl px-3 py-4">
              <img className="w-7 mb-2" src={Sub} alt="" />
              <h1 className="text-xs font-semibold">Subs</h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex  active:bg-gray-300 hover:bg-gray-200 m-1 items-center rounded-lg py-2 mt-2 px-3 ">
            <img className="w-7 ml-[5px] mr-6 " src={Home} alt="" />
            <h1 className="text-base font-semibold pr-20">Home</h1>
          </div>
          <div className="flex  active:bg-gray-300 hover:bg-gray-200 m-1 items-center rounded-lg py-2 px-3">
            <img className="w-7 ml-[5px] mr-6 " src={Exp} alt="" />
            <h1 className="text-sm font-semibold pr-12">Explore</h1>
          </div>
          <div className="flex  active:bg-gray-300 hover:bg-gray-200 m-1 items-center rounded-lg py-2 px-3">
            <img className="w-7 ml-[5px] mr-6 " src={Lib} alt="" />
            <h1 className="text-sm font-semibold pr-12">Library</h1>
          </div>
          <div className="flex  active:bg-gray-300 hover:bg-gray-200 m-1 items-center rounded-lg py-2 px-3">
            <img className="w-7 ml-[5px] mr-6 " src={Ori} alt="" />
            <h1 className="text-sm font-semibold pr-12">Orignals</h1>
          </div>
          <div className="flex  active:bg-gray-300 hover:bg-gray-200 m-1 items-center rounded-lg py-2 px-3">
            <img className="w-7 ml-[5px] mr-6  " src={App} alt="" />
            <h1 className="text-sm font-semibold pr-12">Apps</h1>
          </div>
          <div className="flex  active:bg-gray-300 hover:bg-gray-200 m-1 items-center rounded-lg py-2 px-3">
            <img className="w-7 ml-[5px] mr-6 " src={Mus} alt="" />
            <h1 className="text-sm font-semibold pr-12">Music</h1>
          </div>
          <div className="flex  active:bg-gray-300 hover:bg-gray-200 m-1 items-center rounded-lg py-2 px-3">
            <img className="w-7 ml-[5px] mr-6 " src={Sub} alt="" />
            <h1 className="text-sm font-semibold pr-12">Subs</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default SideBar