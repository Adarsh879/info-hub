import React, { useState, useEffect } from "react";
// import "../static/css/info-hub.css";
import Layout from "./component/layout";
import Style from "./app.module.css";
import Feeds from "./component/feed/feeds";
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
