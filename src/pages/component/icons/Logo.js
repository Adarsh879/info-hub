import * as React from "react";
import logo from "../../../static/svg/icons/logo.svg";

function SvgLogo(props) {
  return <embed src={logo} style={{ height: "40px" }} />;
}

export default SvgLogo;
