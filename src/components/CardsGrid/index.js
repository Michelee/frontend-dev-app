import React, { memo } from "react";
import { Link } from "react-router-dom";
import ClientCard from "../ClientCard";
import ReadMoreIcon from "../../assets/icons/read-more-icon.svg";
import styles from "./CardsGrid.module.css";

const CardsGrid = ({ list }) => {
  const renderSmallLinks = (links) => (
    <div className={styles.infoCardsContainer}>
      {links.map((item) => (
        <div className={styles.infoCards}>
          <span className={styles.companyName}>{item.company}</span>
          <h4>{item.title}</h4>
          <Link className={styles.readMore} to={item.path}>
            <img src={ReadMoreIcon} alt="read-more" />
            Read More
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {list.length > 0 ? (
        <>
          <div>
            {list.slice(0, 4).map((item) => (
              <ClientCard cardInfo={item} type="small" />
            ))}
          </div>
          <div className={styles.flexContainer}>
            {list.slice(4, 8).length > 3 ? (
              <>
                <ClientCard cardInfo={list[4]} type="large" />
                {renderSmallLinks(list.slice(5, 8))}
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            {list.slice(8, 10).map((item) => (
              <ClientCard cardInfo={item} type="small" />
            ))}
          </div>
          <div className={styles.flexContainer}>
            {list.slice(10, 13).length > 3 ? (
              <>
                {renderSmallLinks(list.slice(10, 13))}
                <ClientCard cardInfo={list[13]} type="large" />
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            {list.slice(14, 18).map((item) => (
              <ClientCard cardInfo={item} type="small" />
            ))}
          </div>
          <div className={styles.quoteComponent}>
            <p>“Dept helped us tell our story through a bold new identity and a
            robust online experience. To the tone of 60% growth in online
            bookings in just one month”</p>
            <span>Mattijs ten drink - CEO, TRANSAVIA</span>
          </div>
          <div>
            {list.slice(18, 20).map((item) => (
              <ClientCard cardInfo={item} type="small" />
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default memo(CardsGrid);
