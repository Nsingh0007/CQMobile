import React from "react";
import "./CommonContainer.css";
function Container(props) {
  return (
    <div className={`Main-container-outer ${props.outer && props.outer} `}>
      <div className={`Main-container-inner ${props.inner && props.inner}`}>
        {props.children}
      </div>
    </div>
  );
}

export default Container;
