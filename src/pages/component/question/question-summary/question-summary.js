import React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

import "./question-summary.css";
import { Link } from "react-router-dom";
import Tag from "../../tag/tag";

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
      <Link to={`/question/${id}/${title}`}>
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
          <Link to={`/users/${author.id}`}>
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
            <Link to={`/users/${author.id}`}>
              <a>{author.username}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSummary;
