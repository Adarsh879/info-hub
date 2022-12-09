import React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

import styles from "./post-item.module.css";
import { Link } from "react-router-dom";

const PostItem = ({ vote, title, created, id }) => {
  return (
    <div className={styles.container}>
      <div className={styles.vote}>{vote}</div>
      <Link to={`/question/${id}/${title}`}>
        <a className={styles.title}>{title}</a>
      </Link>
      <div className={styles.created}>
        {formatDistanceToNowStrict(new Date(created), {
          addSuffix: true,
        })}
      </div>
    </div>
  );
};

export default PostItem;
