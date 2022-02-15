import React, { Suspense, useContext, useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AppContext, AppInitState, AppReducer } from "../src/contexts/AppContext";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { SideNav } from "./components/SideNav"
import { DashboardHeader } from "./components/DashbaordHeader";
import { HeroList } from "./views/HeroList/HeroList";
import { HeroDetails } from "./views/HeroDetails/HeroDetails"
import { Support } from "./views/Support/Support"

const WrapperView = () => {
  const [AppState, AppDispatch] = useReducer(AppReducer, AppInitState);
  const [openProfileDropDown, setOpenProfileDropDown] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [t, i18n] = useTranslation("common");

  const { loggedIn, dir, language } = AppState;

  const drowpDownHandler = () => {
    setOpenProfileDropDown(!openProfileDropDown);
  };
  const langugaeDropdownHandler = () => {
    setOpenLanguage(!openLanguage);
  };
  const changeLanguageHandler = value => {
    i18n.changeLanguage(value);
    AppDispatch({ type: "language", payload: { language: value } });
  };
  return (
    <div className="flex h-screen" dir={dir}>
      <SideNav />
      <div className="w-full bg-dashboardBg overflow-scroll h-screen lg:w-full">
        <DashboardHeader
          language={language}
          openProfileDropDown={openProfileDropDown}
          setOpenProfileDropDown={drowpDownHandler}
          openLanguage={openLanguage}
          langugaeDropdownHandler={langugaeDropdownHandler}
          changeLanguageHandler={value => changeLanguageHandler(value)}
        />
        <div className="px-4 py-2">
          <Switch>
            <ProtectedRoute secure exact path="/heroes" component={HeroList} />
            <ProtectedRoute secure exact path="/heroes/:id" component={HeroDetails} />
            <ProtectedRoute secure exact path="/support" component={Support} />
            <ProtectedRoute path="*" component={() => <Redirect to="/heroes" />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  const [AppState, AppDispatch] = useReducer(AppReducer, AppInitState);
  const { token } = AppState;

  useEffect(() => {}, []);
  return (
    <AppContext.Provider value={{ AppState, AppDispatch }}>
        <Router>
          <WrapperView />
        </Router>
    </AppContext.Provider>
  );
};

export default App;