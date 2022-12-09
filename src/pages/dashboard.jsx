import React from "react";
// import "../static/css/info-hub.css";
import Layout from "./component/layout";
import Style from "./app.module.css";
import { Outlet } from "react-router-dom";

function DashBoard(props) {
  return (
    <div className={Style.container}>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default DashBoard;
