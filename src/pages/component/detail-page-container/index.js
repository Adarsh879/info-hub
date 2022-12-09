import React from "react";
import Main from "../layout/main";

import styles from "./detail-page-container.module.css";

const DetailPageContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <Main border={false}>{children}</Main>
    </div>
  );
};

export default DetailPageContainer;
