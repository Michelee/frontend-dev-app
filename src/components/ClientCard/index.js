import React from "react";
import { Link } from "react-router-dom";
import ReadMoreIcon from "../../assets/icons/read-more-icon.svg";
import styles from "./ClientCard.module.css";

const ClientCard = ({ cardInfo, type }) => {
  const { path, title, filename, company } = cardInfo;
  const imgUrl = filename ? require(`../../assets/images/posts/${filename}`) : "";
  const style = filename ? {
    backgroundImage: `linear-gradient(
      358.53deg,
      rgba(0, 0, 0, 0.33) 1.79%,
      rgba(0, 0, 0, 0) 99.33%
    ),
    url("${imgUrl}")`,
  } : {
    backgroundColor: '#000'
  };

  return (
    <div
      style={style}
      className={`${styles.cardContainer} ${
        type === "small" ? styles.smallCard : styles.largeCard
      }`}
    >
      <div className={styles.cardInfo}>
        <span className={styles.companyName}>{company}</span>
        <h4>{title}</h4>
        <Link className={styles.readMore} to={path}>
          <img src={ReadMoreIcon} alt="read-more" />
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ClientCard;
