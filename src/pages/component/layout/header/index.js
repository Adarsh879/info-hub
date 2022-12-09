import React, { useEffect, useContext } from "react";
import cn from "classnames";

import { AuthContext } from "../../../../store/auth";

import Button from "../../button/button";
import { Menu, Close, Logo } from "../../icons";

import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ className, ...props }) => {
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <Button className={styles.logo} href="/">
          <Logo />
          <p>
            Ask<span>Me</span>
          </p>
        </Button>
        <div style={{ flex: 1 }}></div>
        <Button
          style={{ margin: "auto 0" }}
          primary
          onClick={() => navigate("/ask")}
        >
          Ask Question
        </Button>
        <div className={styles.userInfo}>
          <p>
            Welcome{" "}
            <Link href="/users/[user]" as={`/users/${authState.userInfo.id}`}>
              <a>{authState.userInfo.username}!</a>
            </Link>
          </p>
          <a onClick={() => logout()}>log out</a>
        </div>
      </div>

      {/* <div ref={ref}>
        <NavigationDropdown />
      </div> */}
    </header>
  );
};

export default Header;
