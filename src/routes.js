import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

// bundled with main app
import { NotFound } from "./views/NotFound";
import { Login } from "./views/Login";
import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
import { Policy } from "./views/Policy";
import { Faq } from "./views/Faq";
import { Dashboard } from "./views/Dashboard";
import { Wallet } from "./views/Wallet";
// on demand lazy load
// const Dashboard = lazy(() => import('./views/Dashboard'));

// for redirect usage
// component: () => <Redirect to='/dashboard' />,
export const routes = [
  {
    exact: true,
    path: "/",
    component: Dashboard
  },
  {
    path: "/wallet",
    component: Wallet
  },
  {
    path: "/404",
    component: NotFound
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/policy",
    component: Policy
  },
  {
    path: "/faq",
    component: Faq
  },
  {
    path: "*",
    component: () => <Redirect to="/404" />
  }
];
