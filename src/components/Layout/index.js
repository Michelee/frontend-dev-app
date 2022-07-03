import React from "react";
import Header from "../Header";
import { headerLinks } from "../../constants/headerLinks";

const Layout = ({ children }) => (
  <div className="">
    <Header headerLinks={headerLinks} />
    <div>{children}</div>
  </div>
);
export default Layout;
