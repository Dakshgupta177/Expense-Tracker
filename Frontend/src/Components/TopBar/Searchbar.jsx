import React, { useState } from "react";

function Searchbar() {
  const [lightMode, setLightMode] = useState(false);

  const onLightModeClick = () => setLightMode(prev => !prev);

  return (
    <div className="flex w-[80%] bg-white items-center justify-between px-4 ">

      <div className="font-semibold ">
        <h3 className="">Overview</h3>
      </div>

      

      <div className="flex items-center gap-7 justify-between ">
        <div className="flex items-center gap-2 border px-5 py-1 rounded-md bg-[#F6F6F8] h-8 justify-between">
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
          className="w-5"
        />
      </div>

    </div>
  );
}

export default Searchbar;
