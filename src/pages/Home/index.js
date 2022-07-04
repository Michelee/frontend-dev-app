import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardsGrid from "../../components/CardsGrid";
import ClientsSection from "../../components/ClientsSection";
import Dropdown from "../../components/Dropdown";
import Layout from "../../components/Layout";
import {
  getAllPosts,
  getState,
  group,
  filter,
} from "../../features/posts/postsSlice";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { posts } = useSelector(getState);
  const { list, groupBy, filterBy, loading } = posts;

  return (
    <Layout>
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
              { id: 'category1', name: "Category 1" },
              { id: 'category2', name: "Category 2" },
              { id: 'category3', name: "Category 3" },
            ]}
            name="groupBy"
            dataTest="filter-dropdown"
            label="in"
            value={groupBy}
            defaultValue="all industries"
            handleChange={(e) => dispatch(group(e.target.value))}
            addClass={styles.filterDropdown}
          />
          <Dropdown
            options={[
              { id: 'industry1', name: "Industry 1" },
              { id: 'industry2', name: "Industry 2" },
              { id: 'industry3', name: "Industry 3" },
            ]}
            name="filterBy"
            dataTest="filter-dropdown"
            label="Show me"
            value={filterBy}
            defaultValue="all work"
            handleChange={(e) => dispatch(filter(e.target.value))}
            addClass={styles.filterDropdown}
          />
        </div>
        <div className={styles.postGridContainer}>
          {loading && <h4>Loading</h4>}
          {list && list.length ? <CardsGrid list={list} /> : ""}
        </div>
        <ClientsSection />
      </div>
    </Layout>
  );
};

export default Home;
