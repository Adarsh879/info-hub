import React from "react";
import SidebarOptions from "./sidebarOptions";

function Sidebar() {
  return (
    <div style={{ marginRight: "10px", flex: "0.2", position: "sticky" }}>
      <SidebarOptions />
    </div>
  );
}

export default Sidebar;
