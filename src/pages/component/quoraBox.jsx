import { Avatar } from "@material-ui/core";
import React from "react";
import "../../static/css/quoraBox.css";

function QuoraBox() {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar />
      </div>
      <div className="quoraBox__quora">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  );
}

export default QuoraBox;
