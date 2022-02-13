import React, { useState, useContext, useReducer } from "react";

import Logo from "../../assets/images/logo.svg";
import LoginVector from "../../assets/images/login-vector.svg";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../../axios";
import { AppContext, AppInitState, AppReducer } from "../../contexts/AppContext";

export const Login = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const initialFormData = Object.freeze({
    email: "",
    password: ""
  });

  const LOGIN_URL = "rest-auth/login/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [AppState, AppDispatch] = useReducer(AppReducer, AppInitState);
  const handleSubmit = e => {
    e.preventDefault();
    const formData = { email, password };
    setLoading(true);
    axiosInstance
      .post(LOGIN_URL, {
        email: formData.email,
        password: formData.password
      })
      .then(res => {
        localStorage.setItem("token", res.data.key);
        axiosInstance.defaults.headers["Authorization"] = "jwt " + localStorage.getItem("token");
        setLoading(false);
        AppDispatch({ type: "login", payload: { token: res.data.key } });
        window.location.reload(); // Need refactor
      })
      .catch(err => {
        setLoading(false);
        console.log("error");
      });
  };
  return (
    <div className="h-screen flex p-24 lg:px-32 justify-around">
      <div className="flex hidden lg:block py-24">
        <p className="text-5xl font-bold">
          Sign In and track
          <span className="">
            <br />
            your <span className="text-primary-0">Purchase</span>
          </span>
        </p>
        <p className="text-base text-gray-600 font-bold py-10">
          If you don’t have account
          <span>
            <br />
            you can
            <span className="text-primary-0">
              <a> register here!</a>
            </span>
          </span>
        </p>
        <div className="">
          <img src={LoginVector} alt="Login vector" className=" h-80 w-80 text-center" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="">
          <img src={Logo} alt="Siulah logo" className="h-28 w-28 mx-auto" />
          <div className="py-4 text-right text-secondary-0">
            <div className=" w-80">
              <input
                required
                onChange={e => setEmail(e.target.value.trim())}
                type="email"
                placeholder="Enter your email or phone number"
                className="form-input w-full border-transparent focus:outline-none  focus:ring-primary-0 focus:ring-1 focus:border-transparent px-4 py-3 rounded-xl bg-dashboardBg border-dashboardBg"
              />
            </div>
            <div className="py-4"></div>
            <div className="w-80">
              <input
                required
                onChange={e => setPassword(e.target.value.trim())}
                type="password"
                placeholder="Password"
                className="form-input w-full border-transparent focus:outline-none  focus:ring-primary-0 focus:ring-1 focus:border-transparent px-4 py-3 rounded-xl bg-dashboardBg border-dashboardBg"
              />
            </div>
            {loginMessage && <div className="text-red-400">{loginMessage}</div>}
            <div className="p-2 font-normal">Forget Password?</div>
            <div className="w-80 py-8">
              <button
                onClick={handleSubmit}
                className=" flex justify-center items-center w-full px-4 py-3 rounded-xl  bg-secondary-0 focus:outline-none text-white border-dashboardBg"
              >
                {loading && (
                  <div className="inline-block mx-2 w-6 h-6 border-4 border-white border-dashed rounded-full animate-spin"></div>
                )}
                {t("SignIn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
