import React from "react";
import MiddleBottomContainer from "./Middle-Bottom-Container/MiddleBottomContainer";
import MiddleMainContainer from "./Middle-main-Container/MiddleMainContainer";
import MiddleTopContainer from "./Middle-Top-Container/MiddleTopContainer";
import "./CareerMiddleContainer.css";
function CareerMiddleContainer() {
  return (
    <>
      <MiddleTopContainer />
      <MiddleMainContainer />
      <MiddleBottomContainer />
    </>
  );
}

export default CareerMiddleContainer;
