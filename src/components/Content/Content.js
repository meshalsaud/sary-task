import React from "react";
import { Wallet } from "../../views/Wallet";

export const Content = ({ activePage }) => {
  return activePage == "Wallet" ? <Wallet /> : "";
};
