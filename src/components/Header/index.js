import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WhiteLogo from "../../assets/images/dept-logo-white.svg";
import BlackLogo from "../../assets/images/dept-logo-black.svg";
import DotsIcon from "../../assets/icons/DotsIcon";
import headerLinks from "../../constants/headerLinks";
import styles from "./Header.module.css";
import Submenu from "../Submenu";

const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  const location = useLocation();
  const links = headerLinks.filter(item => item.type.includes('header'))

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <picture>
          <source media="(max-width: 1023px)" srcSet={BlackLogo} />
          <img src={WhiteLogo} alt="Dept" title="Dept" />
        </picture>
      </Link>
      <button className={styles.menuButton} onClick={() => setOpenModal(true)}>Menu</button>
      <div className={styles.desktopMenu}>
        <ul>
          {links.map(({path, label}) => (
            <li key={path}>
              <Link className={path === location.pathname ? styles.activeLink : ''} to={path}>{label}</Link>
            </li>
          ))}
        </ul>
        <button className={styles.moreButton} onClick={() => setOpenModal(true)}>
          <DotsIcon />
        </button>
      </div>
      <Submenu openModal={openModal} handleClose={() => setOpenModal(false)} />
    </header>
  );
};

export default Header;
