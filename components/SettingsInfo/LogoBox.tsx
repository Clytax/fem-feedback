import React, { useState, useEffect } from "react";

// Icons
import { IconClose, IconHamburger } from "@icons";
const LogoBox = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[72px] w-full flex-row items-center justify-between bg-header-bg-mobile bg-cover bg-no-repeat px-6 md:h-[178px] md:w-1/3 md:items-end md:rounded-xl md:bg-header-bg-tablet md:pb-6 lg:h-[137px] lg:w-[255px] lg:bg-header-bg-desktop">
      <div className="flex flex-col">
        <h1 className="text-body2 font-bold tracking-h4 text-white md:text-h2 md:tracking-h1 ">
          Frontend Mentor
        </h1>
        <h2 className="text-body3 font-medium text-white md:text-body2">
          Feedback Board
        </h2>
      </div>
      <button
        className="cursor-pointer md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <IconClose /> : <IconHamburger />}
      </button>
    </div>
  );
};

export default LogoBox;
