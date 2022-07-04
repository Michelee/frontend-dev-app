import React from "react";
import WhiteLogo from "../../assets/images/dept-logo-white.svg";
import TopArrow from "../../assets/icons/top-arrow.svg";
import InstagramIcon from "../../assets/icons/socialMedia/instagram.svg";
import FacebookIcon from "../../assets/icons/socialMedia/facebook.svg";
import TwitterIcon from "../../assets/icons/socialMedia/twitter.svg";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = ({ pageLinks }) => {
  const links = pageLinks.filter((item) => item.type.includes("footer"));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <img src={WhiteLogo} alt="dept-logo" className={styles.footerLogo} />
          <ul aria-label="footer-links">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.socialMediaLinks}>
            <a href="/facebook">
              <img src={FacebookIcon} alt="facebook-link" />
            </a>
            <a href="/twitter">
              <img src={TwitterIcon} alt="twitter-link" width={30} />
            </a>
            <a href="/instagram">
              <img src={InstagramIcon} alt="instagram-link" />
            </a>
          </div>
        </div>
        <div className={styles.footerInfo}>
          <div>
            <span>Chamber of Commerce: 63464101</span>
            <span>VAT: NL 8552.47.502.B01</span>
            <Link to="/terms-and-conditions">Terms and conditions</Link>
          </div>
          <span>© 2022 Dept Agency</span>
        </div>
      </div>
      <div className={styles.topButton} onClick={() => scrollToTop()}>
        <img src={TopArrow} alt="top-arrow" />
        <span>Top</span>
      </div>
    </div>
  );
};

export default Footer;
