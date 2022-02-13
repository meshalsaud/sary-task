import React, { useContext, useState, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { AppContext, AppInitState, AppReducer } from "../../contexts/AppContext";
import { PieChartView } from "../../components/PieChartView";
import JarrerLogo from "../../assets/images/jarrer-logo.svg";
import { SummaryHeader } from "../../components/SummaryHeader";

export const Dashboard = () => {
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
      <div className="flex">
        {/* Start Total balance card */}
        <div className="flex flex-col w-80 bg-white items-center text-gray-500 p-4 rounded-xl">
          <h4 className="font-medium">{t("Total Balance")}</h4>
          <span className="text-base text-gray-800 font-bold">
            {t("SAR")}
            <span> 1500</span>
          </span>

          <div className="py-2 w-80 h-72">
            <PieChartView />
          </div>
        </div>
        {/* end Total balance card */}

        {/* Start Slider balance card */}
        <div
          className={`flex-1 relative bg-white justify-center items-center p-4 rounded-xl ${
            i18n.language == "en" ? "ml-8" : "mr-8"
          }`}
        >
          <div className={`absolute top-2 ${i18n.language == "en" ? "right-2" : "left-2"}`}>
            <span className="text-xs px-2 font-medium bg-red-500 bg-opacity-10 text-red-800 rounded py-0.5">
              {t("Sale 60%")}
            </span>
          </div>

          <div className="flex flex-col items-center py-10">
            <img src={JarrerLogo} alt="Partner logo" className="h-40 w-40" />
            <div className="font-extrabold text-xl">Jarrer</div>
            <div className="text-sm font-medium text-gray-600">Books</div>
            <button className="bg-secondary-0 text-white text-xs my-2 py-1 px-6">Visit store</button>
          </div>
        </div>

        {/* end Slider balance card */}
      </div>
    </div>
  );
};
