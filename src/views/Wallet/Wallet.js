import React, { useContext, useState, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { AppContext, AppInitState, AppReducer } from "../../contexts/AppContext";
import { SummaryHeader } from "../../components/SummaryHeader";
import { Table } from "../../components/Table";

export const Wallet = () => {
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
      <div className="bg-white items-center text-gray-500 p-4 rounded-xl">
        <Table />
      </div>

      {/* End table part */}
    </div>
  );
};
