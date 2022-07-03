import React from "react";
import Layout from "../../components/Layout";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Layout activePage='home'>
      <div className={styles.home}>
        <div className={styles.heroContainer}>
          <div className={styles.mainText}>
            <span className={styles.brandLabel}>Work</span>
            <p>A selection of projects that <b>pioneer</b> <b>tech</b> and <b>marketing</b> to help brands stay ahead.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
