import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { useTranslation } from "react-i18next";

export const DashboardHeader = ({
  language,
  openProfileDropDown,
  setOpenProfileDropDown,
  openLanguage,
  langugaeDropdownHandler,
  changeLanguageHandler
}) => {
  const history = useHistory();
  const [openNotification, setOpenNotification] = useState(false);
  const [t, i18n] = useTranslation("common");

  const openNotificationHadler = () => {
    history.push("/wallet");
  };
  return (
    <div className="flex justify-end  py-4 px-2">
      <div className=" text-left">
        <div className="flex">
          {/* start language */}
          <div className="relative">
            <button
              onClick={langugaeDropdownHandler}
              type="button"
              className="inline-flex justify-center w-full p-2  text-sm font-medium  focus:outline-none "
              id="lang-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <span className="capitalize">{language}</span>
              <RiArrowDropDownFill className="h-5 w-5" />
            </button>
            <div
              className={` origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white  focus:outline-none ${
                !openLanguage ? "hidden" : "block"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="lang-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  onClick={() => changeLanguageHandler("ar")}
                  className="text-gray-700 hover:bg-dashboardBg block px-4 py-2 text-sm cursor-pointer focus:outline-none"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  العربية
                </a>
                <a
                  onClick={() => changeLanguageHandler("en")}
                  className="text-gray-700 hover:bg-dashboardBg block px-4 py-2 text-sm cursor-pointer focus:outline-none"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  English
                </a>
              </div>
            </div>
          </div>
          {/* end language */}
          <NavLink to="/wallet" onClick={openNotificationHadler} className="flex justify-center items-center relative ">
            <IoIosNotifications fill="#BCBCCB" className="h-8 w-8" />
            <span className="flex absolute top-0 right-0 h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-0 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-0"></span>
            </span>
          </NavLink>
          <div className="relative">
            <button
              onClick={() => setOpenProfileDropDown(true)}
              type="button"
              className="inline-flex justify-center w-full p-2  text-sm font-medium  focus:outline-none "
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white mx-2"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span>Meshal Saud</span>
              <RiArrowDropDownFill className="h-5 w-5" />
            </button>

            <div
              className={` origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white  focus:outline-none ${
                !openProfileDropDown ? "hidden" : "block"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 hover:bg-dashboardBg block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  {t("Account settings")}
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 hover:bg-dashboardBg block w-full text-left px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                  >
                    {t("Sign out")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
