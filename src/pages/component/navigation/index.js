import React from "react";

import NavItem from "./nav-item";
import { World } from "../icons";

import styles from "./navigation.module.css";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <NavItem
        href="/"
        selected={
          location.pathname == "/" ||
          location.pathname.split("/")[1] == "questions"
        }
      >
        <World />
        <span>Home</span>
      </NavItem>

      <NavItem
        href="/users"
        selected={location.pathname.split("/")[1] == "users"}
      >
        <span>Users</span>
      </NavItem>
    </nav>
  );
};

export default Navigation;
