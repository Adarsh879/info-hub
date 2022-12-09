import React from "react";

import styles from "./post-list.module.css";

const PostList = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Latest Questions</h2>
      </div>
      {children}
    </div>
  );
};

export default PostList;
