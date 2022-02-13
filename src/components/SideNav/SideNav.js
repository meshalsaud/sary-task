import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { RiDashboardLine } from "react-icons/ri";
import { BiWallet, BiPurchaseTag } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { HiOutlineSupport } from "react-icons/hi";
import { NavItem } from "../../components/NavItem";

export const SideNav = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const changeActiveHandler = title => {
    setActivePage(title);
  };
  return (
    <div className="hidden w-80 relative lg:block ">
      <div className="my-2 mb-6 flex justify-center">
        <img src={Logo} alt="Siulah logo" className="h-28 w-28 text-center" />
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
          link="wallet"
          icon={<BiWallet className="h-7 w-7" />}
          title="wallet"
          activePage={activePage}
          changeActiveHandler={title => changeActiveHandler(title)}
        />
        <NavItem
          link="payments"
          icon={<MdPayment className="h-7 w-7" />}
          title="payments"
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
      </ul>
      <div className="flex animate-pulse flex-col font-medium absolute text-center bottom-10 right-5 left-5  bg-gradient-to-r from-secondary-0 to-primary-50 p-8 text-white rounded-xl">
        <span className="">
          Try our app <br />
          version
        </span>
        <button className="bg-white font-medium text-secondary-0 rounded-full py-1 px-4 my-2 hover:bg-gray-100">
          Download
        </button>
      </div>
    </div>
  );
};
