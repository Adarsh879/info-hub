import React, { useContext } from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

import Tag from "../../tag/tag";

import styles from "./post-summary.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../store/auth";
import { FetchContext } from "../../../../store/fetch";

const PostSummary = ({
  tags,
  author,
  created,
  questionId,
  answerId,
  setQuestion,
  children,
}) => {
  const { authState } = useContext(AuthContext);
  const { authAxios } = useContext(FetchContext);
  const navigate = useNavigate();

  const handleDeleteComment = async () => {
    const res = window.confirm("Are you sure delete your post?");
    if (res) {
      const { data } = await authAxios.delete(
        answerId
          ? `/answer/${questionId}/${answerId}`
          : `/question/${questionId}`
      );

      if (answerId) {
        setQuestion(data);
      } else {
        navigate(-1);
      }
    }
  };

  console.log("userId: " + authState.userInfo?.id + " autorid" + author.id);

  return (
    <div className={styles.postCell}>
      <div className={styles.text}>{children}</div>
      <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.tagContainer}>
            {tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className={styles.userDetails}>
            <Link to={`/users/${author.id}`}>
              <img
                src={`https://secure.gravatar.com/avatar/${author.id}?s=32&d=identicon`}
                alt={author.id}
              />
            </Link>
            <div className={styles.info}>
              <span>
                {tags ? "asked" : "answered"}{" "}
                {formatDistanceToNowStrict(new Date(created), {
                  addSuffix: true,
                })}
              </span>
              <Link to={`/users/${author.id}`}></Link>
            </div>
          </div>
        </div>
        {authState.userInfo?.id === author.id && (
          <div className={styles.row}>
            <a className={styles.delete} onClick={() => handleDeleteComment()}>
              delete
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostSummary;
