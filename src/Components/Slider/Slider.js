import React from "react";
import "./Slider.css";
function Slider(props) {
  return (
    <div className={`slider-outer ${props.sliderOuter}`}>
      <div className={`slider ${props.sliderInner}`}>{props.children}</div>
    </div>
  );
}

export default Slider;
