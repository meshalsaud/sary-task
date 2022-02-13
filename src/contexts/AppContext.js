import React from "react";
import jwt_decode from "jwt-decode";

export const AppInitState = {
  token: localStorage.getItem("token") || "",
  dir: "ltr",
  language: "english"
};

export const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "login": {
      try {
        const { token } = payload;
        // localStorage.getItem("token", token);
        return { ...state, token: token };
      } catch (error) {
        console.error(error);
        return state;
      }
    }
    case "logoout": {
      localStorage.removeItem("token");
      return { token: null, user: null, loggedIn: false };
    }
    case "language": {
      const { language } = payload;
      if (language === "en") {
        return { ...state, language: "english", dir: "ltr" };
      } else {
        return { ...state, language: "arabic", dir: "rtl" };
      }
    }
    default: {
      return state;
    }
  }
};

export const AppContext = React.createContext();
