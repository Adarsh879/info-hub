import React from "react";
import cn from "classnames";

import Sidebar from "./sidebar";
import Main from "./main";
import PopularTags from "./extra";
import Header from "./header";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <div className={cn(styles.body, styles.main)}>
          <Sidebar />
          <Main>{children}</Main>
          <PopularTags />
        </div>
      </div>
    </div>
  );
};

export default Layout;
