import React, { useState } from "react";
import Profilebar from "./Profilebar";

function Searchbar() {
  const [lightMode, setLightMode] = useState(false);


  const onLightModeClick = () => setLightMode(prev => !prev);


  return (
    <div className="flex w-full bg-white items-center justify-between px-4">

      <div className="font-semibold ">
        <h3 className="text-3xl font-bold">Overview</h3>
      </div>

      <div className="flex p-3">
        <div className="flex items-center gap-6 mr-8">



        <div className="flex items-center gap-2 border px-2 py-1 rounded-md text-black bg-[#e5e7eb]">
        <img src="/icons/search.png" alt="search" className="w-4 h-4" />
        <input 
          type="text"
          placeholder="Search data..."
          className="outline-none"
        />
      </div>

        <img
          onClick={onLightModeClick}
          src={lightMode ? "/icons/lightmode.png" : "/icons/darkmode.png"}
          alt="mode"
          className="cursor-pointer w-5"
        />

        <img
          src="/icons/notification.png"
          alt="notification"
          className="w-5 cursor-pointer"
        />
      </div>

      <div>
        <Profilebar 
        profileName={"Md Laraib Alam"}
        plan={"Premium Plan"}
        profilePhoto={"/icons/user.png"}
        />
      </div>

      </div>

    </div>
  );
}

export default Searchbar;
