import React, { Suspense, useContext, useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { routes } from "./routes";
import { SideNav } from "./components/SideNav";
import { DashboardHeader } from "./components/DashbaordHeader";
import { Dashboard } from "./views/Dashboard";
import { Wallet } from "./views/Wallet";
import { Payment } from "./views/Payment";
import { Purchases } from "./views/Purchases";
import { Support } from "./views/Support";

import { AppContext, AppInitState, AppReducer } from "../src/contexts/AppContext";
import { Login } from "./views/Login";
import { useTranslation } from "react-i18next";
import axios from "axios";

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
        <div className="px-4 py-2 ">
          <Switch>
            <ProtectedRoute secure exact path="/" component={() => <Redirect to="/dashboard" />} />
            <ProtectedRoute secure exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute secure exact path="/wallet" component={Wallet} />
            <ProtectedRoute secure exact path="/payments" component={Payment} />
            <ProtectedRoute secure exact path="/support" component={Wallet} />

            <ProtectedRoute path="*" component={() => <Redirect to="/dashboard" />} />
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
      <Suspense fallback="loading">
        <Router>
          {token ? (
            <WrapperView />
          ) : (
            <Switch>
              <ProtectedRoute exact path="/login" component={Login} />
              <ProtectedRoute path="*" component={() => <Redirect to="/login" />} />
            </Switch>
          )}
        </Router>
      </Suspense>
    </AppContext.Provider>
  );
};

export default App;