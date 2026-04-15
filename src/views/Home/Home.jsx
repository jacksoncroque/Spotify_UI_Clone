import React from "react";
import styles from "./home.module.scss";

import Navbar from "../../components/Navbar";
import Hero from "./Hero/Hero";
import Aside from "./Aside";
import Main from "./Main/Main";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <Aside />
        <Main />
      </div>
      <Hero />
    </div>
  );
};

export default Home;
