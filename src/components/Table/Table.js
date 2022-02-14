import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrOverview } from "react-icons/gr";
import { GiBugleCall, GiCavalry } from "react-icons/gi"
import { AiFillStar } from "react-icons/ai"
import { CallHeroModal } from "../CallHeroModal";
import { HeroProfile } from "../HeroProfile";

export const Table = ({ data }) => {
  const [t, i18n] = useTranslation("common");
  const [ showCallHeroModal, setShowCallHeroModal ] = useState(false)
  const [ showProfileModal, setShowProfileModal ] = useState(false)

  return (
    <div>

    <div className="container mx-auto px-4 sm:px-8 ">
      <div className="py-8">
        <div className="flex flex-row mb-1 sm:mb-0 justify-end w-full">
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className="relative">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                  placeholder="name"
                />
              </div>
              <button
                className="px-4 py-2 text-base font-semibold text-white bg-primary-0 rounded-lg shadow-md"
                type="submit"
              >
                 {t("Filter")}
              </button>
            </form>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="bg-dashboardBg px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    {t("Hero No.")}
                  </th>
                  <th
                    scope="col"
                    className="bg-dashboardBg px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    {t("Hero Avatar")}
                  </th>
                  <th
                    scope="col"
                    className="bg-dashboardBg px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    {t("Hero Name")}
                  </th>
                  <th
                    scope="col"
                    className="bg-dashboardBg px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    {t("Powers")}
                  </th>

                  <th
                    scope="col"
                    className="bg-dashboardBg px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    {t("Rate")}
                  </th>
                  <th
                    scope="col"
                    className="bg-dashboardBg px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    {t("Action")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(3)
                  .fill()
                  .map(index => {
                    return (
                      <tr key={index}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">050000</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <a href="#" className="block relative">
                                <GiCavalry fill="#4F45BA" className="mx-auto object-cover rounded-full h-12 w-14 " />
                              </a>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">Meshal Saud</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">active</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <a href="#" className="flex items-center space-x-2">
                            <span>5</span>
                            <AiFillStar fill="#4F45BA" className="h-5 w-5" />
                          </a>
                        </td>
                        <td className="px-5 py-5 space-x-3 border-b border-gray-200 bg-white text-sm">
                          <button onClick={() => setShowProfileModal(!showProfileModal)} href="#" className="inline-block outline-none">
                            <GrOverview className="h-5 w-5" />
                          </button>
                          <button onClick={() => setShowCallHeroModal(!showCallHeroModal)} href="#" className="inline-block outline-none">
                            <GiBugleCall fill="#4F45BA" className="h-5 w-5 animate-pulse" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b bg-secondary-0 text-base text-white  hover:bg-gray-100 "
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CallHeroModal show={showCallHeroModal} setModal={setShowCallHeroModal} />
    <HeroProfile show={showProfileModal} setModal={setShowProfileModal} />
    </div>

  );
};
