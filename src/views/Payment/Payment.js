import React, { useContext, useState, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { AppContext, AppInitState, AppReducer } from "../../contexts/AppContext";
import { SummaryHeader } from "../../components/SummaryHeader";
import { Table } from "../../components/Table";
import JarrerLogo from "../../assets/images/jarrer-logo.svg";
import { GrView } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const paymentDates = [
  {
    date: "02/04/2020",
    storeName: "Jarrer",
    storeLogo: "srcImage",
    status: "due",
    next: false
  },
  {
    date: "02/04/2020",
    storeName: "Jarrer",
    storeLogo: "srcImage",
    status: "paid",
    next: false
  },
  {
    date: "02/04/2020",
    storeName: "Jarrer",
    storeLogo: "srcImage",
    status: "future",
    next: true
  }
];

export const Payment = () => {
  const [t, i18n] = useTranslation("common");
  const [AppState, AppDispatch] = useReducer(AppReducer, AppInitState);
  return (
    <div className="px-6 py-2 text-gray-700">
      <h1 className="font-bold">
        {t("Welcome back")}, <span className="font-font-extrabold text-gray-800 ">Meshal</span>
      </h1>
      <div className="py-4"></div>
      <SummaryHeader />
      <div className="py-8"></div>
      {/* start table part */}
      <div className="bg-white items-center px-4 py-8 rounded-xl">
        {paymentDates.map((data, index) => (
          <div className="flex items-center my-2">
            <div className="w-20 mx-2 text-sm font-medium text-gray-400">5 AUG</div>
            {/* START CELANDER CONTENT */}
            <div
              className={`flex-1 justify-between flex ${
                data.status === "future" ? "bg-gray-100" : data.status === "paid" ? "bg-primary-50" : "bg-red-400"
              } ${data.next ? "order-1" : ""}  rounded-md p-3`}
            >
              <div className="flex">
                <div className="flex justify-center content-center bg-white p-4 rounded-md">
                  <a href="#" class="block ">
                    <img alt="profil" src={JarrerLogo} class="mx-auto object-cover rounded-full h-10 w-12 " />
                  </a>
                </div>
                <div className="mx-4 py-1">
                  <div className="font-bold text-base">Jarrer store</div>
                  <div
                    className={`font-bold text-sm ${data.status === "due" ? "text-white" : "text-gray-500"} pt-0.5 $`}
                  >
                    SAR 500
                  </div>
                </div>
              </div>
              <div className="flex px-4">
                <button href="#" class="inline-block outline-none">
                  <BiDotsHorizontalRounded fill="" className="h-8 w-8" />
                </button>
              </div>
            </div>

            {/* END CELANDER CONTENT */}
          </div>
        ))}
      </div>

      {/* End table part */}
    </div>
  );
};
