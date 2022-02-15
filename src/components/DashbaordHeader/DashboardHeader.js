import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { BsFillPersonFill } from "react-icons/bs";

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
          <div className="relative">
            <button
              onClick={() => setOpenProfileDropDown(true)}
              type="button"
              className="inline-flex justify-center w-full p-2  text-sm font-medium  focus:outline-none "
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <BsFillPersonFill className="h-6 w-6 text-gray-400 inline-block rounded-full ring-2 ring-white mx-2" />
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
