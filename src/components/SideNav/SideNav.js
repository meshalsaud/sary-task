import React, { useState } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BiWallet, BiPurchaseTag } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineSupport } from "react-icons/hi";
import { ImDroplet } from "react-icons/im"

import { NavItem } from "../NavItem";

export const SideNav = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const changeActiveHandler = title => {
    setActivePage(title);
  };
  return (
    <div className="hidden w-80 relative lg:block ">
      <div className="my-2  pt-4 flex flex-row items-baseline justify-center">
      {/* <img src={Logo} alt="Siulah logo" className="h-28 w-28 text-center" /> */}
    <ImDroplet fill="#4F45BA" className="h-6 w-6" />
      <span className="h-16 w-16 text-center font-bold"> Heroes</span>
      </div>
      <ul className="px-7">
        <NavItem
          link="dashboard"
          icon={<RiDashboardLine className="h-7 w-7" />}
          title="dashboard"
          activePage={activePage}
          changeActiveHandler={title => changeActiveHandler(title)}
        />
        <NavItem
          link="support"
          icon={<HiOutlineSupport className="h-7 w-7" />}
          title="support"
          activePage={activePage}
          changeActiveHandler={title => changeActiveHandler(title)}
        />
        <NavItem
          link="about"
          icon={<AiOutlineInfoCircle className="h-7 w-7" />}
          title="about"
          activePage={activePage}
          changeActiveHandler={title => changeActiveHandler(title)}
        />
      </ul>
      <div className="flex animate-pulse flex-col font-medium absolute text-center bottom-10 right-5 left-5  bg-gradient-to-r from-secondary-0 to-primary-50 p-8 text-white rounded-xl">
        <span className="">
          Contact us for supporting
        </span>
        <button className="bg-white font-medium text-secondary-0 rounded-full py-1 px-4 my-2 hover:bg-gray-100">
          Contact
        </button>
      </div>
    </div>
  );
};
