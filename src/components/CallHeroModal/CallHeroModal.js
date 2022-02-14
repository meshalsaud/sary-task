import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";

export const CallHeroModal = ({ show, setModal }) => {
  const [t, i18n] = useTranslation("common");
  return (
    <div className={`${!show ? "hidden" : "block"}`}>
      <div
        className={`overflow-y-auto overflow-x-hidden absolute top-1/2 right-40 z-50 justify-center items-center h-modal sm:h-full `}
        id="popup-modal"
      >
        <div className="relative px-4 w-full  h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="popup-modal"
              >
                <AiOutlineClose onClick={() => setModal(false)} />
              </button>
            </div>
            <div className="p-6 pt-0 text-center">
              <GiAlarmClock fill="##433C44" className="mx-auto mb-4 w-14 h-14" />

              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {t("The hero has been successfully called !")}
              </h3>
              <button
                onClick={() => setModal(false)}
                data-modal-toggle="popup-modal"
                type="button"
                className="text-white bg-primary-0 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                {t("Done")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
