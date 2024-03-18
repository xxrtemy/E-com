import React from "react";

const Button = ({ text, bgColor, textColor, handler, children, disabled }) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} ${children} ${disabled ? "btn-disabled" : ""} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
