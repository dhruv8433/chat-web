import React from "react";

// to reuse --> we have to specify the type of input with additional styles and classname
const MyInput = ({ type, className, style }) => {
  return <input type={type} className={className} style={style} />;
};

export default MyInput;
