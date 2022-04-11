import React from "react";
import classes from "../styles/Button.module.css";
const Button = ({ className, children }) => {
  return (
    <button className={`${classes.button} ${className}`}>
      <span> {children}</span>
    </button>
  );
};

export default Button;
