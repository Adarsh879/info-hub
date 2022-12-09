import React from "react";
import cn from "classnames";
import Style from "./login-form.module.css";

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
        className={cn(hasError && Style.hasError)}
        htmlFor={label}
        {...props}
      ></input>
      {hasError && <p className={Style.inputMessage}>{errorMessage}</p>}
    </>
  );
};

export default FormInput;
