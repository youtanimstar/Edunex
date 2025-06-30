import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text = "Button", type = "filled" , isLink=false, path="/"}) => {

  let buttonClass = "";

  if( type === "filled") {
    buttonClass = `bg-[var(--primary-color)] text-[var(--background-color)]
    px-6 py-2 rounded-lg font-semibold neon-button`;
  } else if (type === "outlined") {
    buttonClass = `px-6 py-2 rounded-lg font-semibold neon-button`;
  }
  else if (type === "text") {
    buttonClass = `px-6 py-2 rounded-lg font-semibold neon-button-text`;
  }

  if(isLink) {
    return (
      <Link to={path} className={buttonClass}>
        {text}
      </Link>
    );
  }
  else {
    return (
      <button className={buttonClass}>
        {text}
      </button>
    );
  }
  
};

export default Button;
