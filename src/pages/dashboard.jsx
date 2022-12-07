import React, { useState, useEffect } from "react";
import Header from "./header";
import Sidebar from "./component/sidebar";
import Widget from "./component/widget";
// import "../static/css/info-hub.css";
import Layout from "./component/layout";
import "./app.module.css";
import Feeds from "./component/feed/feeds";
import { Outlet } from "react-router-dom";

function DashBoard(props) {
  return (
    // <div className="app">
    //   <Header />
    //   <div className="index-container">
    //     <div className="app__content main">
    //       <Sidebar />
    //       <Outlet />
    //       <Widget />
    //     </div>
    //   </div>
    // </div>
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default DashBoard;
