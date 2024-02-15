import React from "react";

// used for p , h1 ... h6 etc.
const MyText = ({ children, style, className }) => {
  return (
    <h1 className={className} style={style}>
      {children}
    </h1>
  );
};

export default MyText;
