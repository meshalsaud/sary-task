import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NavItem = ({ activePage, changeActiveHandler, link, icon, title }) => {
  const [t, i18n] = useTranslation("common");

  return (
    <li
      className={`mb-4 px-2 rounded-full hover:shadow hover:bg-primary-50 transition duration-500 ease-in-out ${
        activePage === title ? "bg-primary-50" : ""
      }`}
    >
      <NavLink
        className="flex items-center no-underline inline-block w-full h-full px-3 py-2 font-bold text-secondary-0 hover:text-black"
        to={link}
        onClick={() => changeActiveHandler(title)}
      >
        {icon}
        <span className="px-5 capitalize">{t(title)}</span>
      </NavLink>
    </li>
  );
};
