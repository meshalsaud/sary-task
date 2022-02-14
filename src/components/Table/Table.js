import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrOverview } from "react-icons/gr";
import { GiBugleCall, GiCavalry } from "react-icons/gi"
import { AiFillStar } from "react-icons/ai"
import { CallHeroModal } from "../CallHeroModal";
import { HeroProfile } from "../HeroProfile";
import { heroes } from "../../variables/heroes";

export const Table = ({ data }) => {
  const [t, i18n] = useTranslation("common");
  const [ showCallHeroModal, setShowCallHeroModal ] = useState(false)
  const [ showProfileModal, setShowProfileModal ] = useState(false)
  const [ currentHero, setCurrentHero ] = useState({})
  const [filterText, setFilterText] = useState("");

  const heroProfileHandler = (data) => {
    setCurrentHero(data);
    if (currentHero) {
      setShowProfileModal(!showProfileModal);
    }
  }

  const filteredHeroes = heroes.filter(
    (item) =>
    item.powers.some(power => power.includes(filterText)) ||
      item.name.toLocaleLowerCase().includes(filterText)
  ) 
  
  const heroesToDisplay = filterText ? filteredHeroes : heroes;
  console.log("item in filter ", heroesToDisplay)
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8 ">
        <div className="py-8">
          <div className="flex flex-row mb-1 sm:mb-0 justify-end w-full">
            <div className="text-end">
              <div className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                <div className="relative">
                  <input
                    onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
                    type="text"
                    value={filterText}
                    id='"form-subscribe-Filter'
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                    placeholder="search.."
                  />
                </div>
              </div>
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
                  {!filteredHeroes
                    ? heroes.map((hero) => (
                        <tr key={heroes.number}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{hero.number}</p>
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
                            <p className="text-gray-900 whitespace-no-wrap">{hero.name}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex flex-wrap max-w-xs space-x-2">
                              {hero.powers.map((power, index) => {
                                return (
                                  <span
                                    key={index}
                                    className="relative my-1 mx-2 inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                    ></span>
                                    <span className="relative">{power}</span>
                                  </span>
                                );
                              })}
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <a href="#" className="flex items-center space-x-2">
                              <span>{hero.rate}</span>
                              <AiFillStar fill="#4F45BA" className="h-5 w-5" />
                            </a>
                          </td>
                          <td className="px-5 py-5 space-x-3 border-b border-gray-200 bg-white text-sm">
                            <button
                              onClick={() => heroProfileHandler(hero)}
                              href="#"
                              className="inline-block outline-none"
                            >
                              <GrOverview className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => setShowCallHeroModal(!showCallHeroModal)}
                              href="#"
                              className="inline-block outline-none"
                            >
                              <GiBugleCall fill="#4F45BA" className="h-5 w-5 animate-pulse" />
                            </button>
                          </td>
                        </tr>
                      ))
                    : heroesToDisplay.map((hero) => (
                        <tr key={heroes.number}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{hero.number}</p>
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
                            <p className="text-gray-900 whitespace-no-wrap">{hero.name}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex flex-wrap max-w-xs space-x-2">
                              {hero.powers.map((power, index) => {
                                return (
                                  <span
                                    key={index}
                                    className="relative my-1 mx-2 inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                    ></span>
                                    <span className="relative">{power}</span>
                                  </span>
                                );
                              })}
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <a href="#" className="flex items-center space-x-2">
                              <span>{hero.rate}</span>
                              <AiFillStar fill="#4F45BA" className="h-5 w-5" />
                            </a>
                          </td>
                          <td className="px-5 py-5 space-x-3 border-b border-gray-200 bg-white text-sm">
                            <button
                              onClick={() => heroProfileHandler(hero)}
                              href="#"
                              className="inline-block outline-none"
                            >
                              <GrOverview className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => setShowCallHeroModal(!showCallHeroModal)}
                              href="#"
                              className="inline-block outline-none"
                            >
                              <GiBugleCall fill="#4F45BA" className="h-5 w-5 animate-pulse" />
                            </button>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CallHeroModal show={showCallHeroModal} setModal={setShowCallHeroModal} />
      <HeroProfile show={showProfileModal} setModal={setShowProfileModal} hero={currentHero} />
    </div>
  );
};
