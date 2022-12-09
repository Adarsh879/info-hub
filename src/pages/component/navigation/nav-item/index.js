import React from "react";
import cn from "classnames";

import styles from "./nav-item.module.css";
import { Link } from "react-router-dom";

const NavItem = ({ href, children, selected, ...props }) => {
  return (
    <Link to={href}>
      <a
        className={cn(styles.navItem, selected && styles.navItemSelected)}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavItem;
