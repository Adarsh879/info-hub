import React from "react";
import { Link } from "react-router-dom";

import "./tag.css";

const Tag = ({ children, className, count, ...props }) => {
  return count ? (
    <div>
      <Link href={{ pathname: "/", query: { tag: children } }}>
        <a className="tag" {...props}>
          {children}
        </a>
      </Link>
      <span className="multiplier">×</span>
      &nbsp;
      <span className="count">{count}</span>
    </div>
  ) : (
    <Link href={{ pathname: "/", query: { tag: children } }}>
      <a className="tag" {...props}>
        {children}
      </a>
    </Link>
  );
};

export default Tag;
