import React from "react";
// import Link from "next/link";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

// import Tag from "../../tag";

import "./question-summary.css";
import { Link } from "react-router-dom";
import Tag from "../../tag/tag";

var tagss = ["afafaf", "faaga"];

const QuestionSummary = ({
  id,
  title,
  tags,
  author,
  createdTime,
  children,
}) => {
  return (
    <div className="summary-container">
      <Link href="/questions/[slug]" as={`/questions/${id}`}>
        <a className="link">{title}</a>
      </Link>
      <div className="excerpt">{children}</div>
      <div className="footer">
        <div className="tagContainer">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="userDetails">
          <Link href="/users/[user]" as={`/users/`}>
            <a>
              <img
                src={`https://secure.gravatar.com/avatar/${author.id}?s=32&d=identicon`}
                alt={author.username}
              />
            </a>
          </Link>
          <div className="info">
            <span>
              asked{" "}
              {formatDistanceToNowStrict(new Date(createdTime), {
                addSuffix: true,
              })}
            </span>
            <Link href="/users/[user]" as={`/users/`}>
              <a>{author.username}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSummary;
