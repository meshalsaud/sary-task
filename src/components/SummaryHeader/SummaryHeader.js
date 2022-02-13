import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppContext, AppInitState, AppReducer } from "../../contexts/AppContext";
import JarrerLogo from "../../assets/images/jarrer-logo.svg";

export const SummaryHeader = ({ data }) => {
  const [t, i18n] = useTranslation("common");

  return (
    <div className="flex justify-between bg-white rounded-xl py-4 px-10">
      <div className="w-80">
        <h4 className="font-medium pt-4">{t("Account Status")}</h4>
        <span class="text-xs px-2 font-medium bg-green-500 bg-opacity-10 text-green-800 rounded py-0.5">
          {t("Active")}
        </span>
      </div>
      <div className="w-80">
        <h4 className="font-medium pt-4">{t("Total Purchases")}</h4>
        <span className="text-base text-gray-800  font-bold">
          {t("SAR")}
          500
        </span>
        <h4 className="text-sm font-bold text-red-400 pt-2">50%</h4>
      </div>

      <div className="flex-1 flex rounded-2xl bg-dashboardBg px-4 pb-14 pt-4 relative">
        <div className={`absolute top-2 ${i18n.language == "en" ? "right-2" : "left-2"}`}>
          <span className="text-xs px-2 font-medium bg-green-500 text-white rounded py-0.5">{t("Paid")}</span>
        </div>
        <div className="font-medium px-2">
          <h4 className="font-medium ">{t("Next Payment")}</h4>
          <span className="text-base text-gray-800 font-bold">
            {t("SAR")}
            1200
          </span>
        </div>
        <div className={`absolute bottom-2 ${i18n.language == "en" ? "right-4" : "left-4"}  `}>
          <span className="text-xs text-gray-800">{t("More")}</span>
        </div>
      </div>
    </div>
  );
};
