import React from "react";
import cn from "classnames";

import styles from "./page-title.module.css";

const PageTitle = ({ title }) => {
  return (
    <div className={cn(styles.container, styles.borderBottom)}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
