import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export const HeroProfile = ({ show, setModal, hero }) => {
  const [t, i18n] = useTranslation("common");
  return (
    <div className={`${!show ? "hidden" : "block"}`}>
      <div
        className={`overflow-y-auto overflow-x-hidden absolute top-5 right-1/4 z-50 justify-center items-center h-modal sm:h-full `}
        id="popup-modal"
      >
        <div className="relative px-4 max-w-screen-sm min-w-full  h-full md:h-auto">
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
            <div className="p-6">
              <div className="flex justify-center">
                <div className="p-5 rounded-full bg-gray-200">
                  <BsFillPersonFill className="h-6 w-6 text-gray-400" />
                </div>
              </div>
              <div className="my-6 space-y-3">
                <div className="space-x-4">
                  <span className="text-base font-semibold">{t("Name")} :</span>
                  <span className="break-all text-gray-600 font-medium">{hero.name}</span>
                </div>
                <div className="space-x-2">
                  <span className="text-base font-semibold">{t("Bio")} :</span>
                  <span className="break-all text-gray-600 font-medium">
                    {hero.bio}
                  </span>
                </div>
                <div className="pt-6">
                  <span className="block text-base font-semibold">{t("Powers")}</span>
                  <ul className="pt-2 bg-white text-sm space-x-2">
                    {
                      hero.powers &&
                      hero.powers
                      .map(power => {
                        return (
                          <li className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                          <span className="relative">{power}</span>
                        </li>
                        )
                      } )
                    }
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
