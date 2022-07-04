import React from "react";
import { Link, useLocation } from "react-router-dom";
import WhiteLogo from "../../assets/images/dept-logo-white.svg";
import XIcon from "../../assets/icons/x-icon.svg";
import TriangleIcon from "../../assets/icons/triangle-icon.svg";
import styles from "./Submenu.module.css";

const Submenu = ({ handleClose, openModal, pageLinks }) => {
  const location = useLocation();
  const links = pageLinks ? pageLinks.filter((item) => item.type.includes("submenu")) : [];

  const countries = [
    "global",
    "nederland",
    "united states",
    "ireland",
    "united kingdom",
    "deutschland",
    "scheweiz",
  ];

  return (
    <div
      data-testid="submenu"
      className={openModal ? styles.submenuActive : styles.submenuHidden}
    >
      <div className={styles.topSection}>
        <Link to="/" className={styles.logo}>
          <img src={WhiteLogo} alt="Dept" title="Dept" />
        </Link>
        <button className={styles.closeButton} onClick={handleClose}>
          <img src={XIcon} alt="close" />
        </button>
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.menuLinks}>
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link to={path}>
                {path === location.pathname && (
                  <img src={TriangleIcon} alt="active" />
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className={styles.countriesList}>
        <li>Landen</li>
        {countries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
