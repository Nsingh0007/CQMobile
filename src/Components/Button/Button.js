import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <div
      onClick={props.handleFunction}
      className={`bttn ${props.bttnClass && props.bttnClass}`}
    >
      {props.children}
    </div>
  );
}

export default Button;
