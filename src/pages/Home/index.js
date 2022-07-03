import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Layout from "../../components/Layout";
import styles from "./Home.module.css";

const Home = () => {
  const [filterBy, setFilterBy] = useState("");
  const [groupBy, setGroupBy] = useState("");

  return (
    <Layout activePage="home">
      <div className={styles.home}>
        <div className={styles.heroContainer}>
          <div className={styles.mainText}>
            <span className={styles.brandLabel}>Work</span>
            <p>
              A selection of projects that <b>pioneer</b> <b>tech</b> and{" "}
              <b>marketing</b> to help brands stay ahead.
            </p>
          </div>
        </div>
        <div className={styles.filtersContainer}>
          <Dropdown
            options={[
              { id: 1, name: "group 1" },
              { id: 2, name: "group 2" },
            ]}
            name="groupBy"
            dataTest="filter-dropdown"
            label="in"
            value={groupBy}
            defaultValue="all industries"
            handleChange={setGroupBy}
            addClass={styles.filterDropdown}
          />
          <Dropdown
            options={[
              { id: 1, name: "option1" },
              { id: 2, name: "option2" },
            ]}
            name="filterBy"
            dataTest="filter-dropdown"
            label="Show me"
            value={filterBy}
            defaultValue="all work"
            handleChange={setFilterBy}
            addClass={styles.filterDropdown}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
