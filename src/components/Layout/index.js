import React from "react";
import Header from "../Header";
import { pageLinks } from "../../constants/pageLinks";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <div className="">
    <Header pageLinks={pageLinks} />
    <div>{children}</div>
    <Footer pageLinks={pageLinks} />
  </div>
);
export default Layout;
