import React from "react";
import cn from "classnames";

import { Alert } from "../icons";

const FormInput = ({
  label,
  inputInfo,
  hasError = false,
  errorMessage,
  ...props
}) => {
  return (
    <>
      <label id={label}>{label}</label>
      {inputInfo && <p className="inputInfo">{inputInfo}</p>}
      <input
        className={cn(hasError && "hasError")}
        htmlFor={label}
        {...props}
      ></input>
      {hasError && <p className="inputMessage">{errorMessage}</p>}
    </>
  );
};

export default FormInput;
