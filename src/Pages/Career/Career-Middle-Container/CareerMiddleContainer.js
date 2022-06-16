import React, { useState } from "react";
import MiddleBottomContainer from "./Middle-Bottom-Container/MiddleBottomContainer";
import MiddleMainContainer from "./Middle-main-Container/MiddleMainContainer";
import MiddleTopContainer from "./Middle-Top-Container/MiddleTopContainer";
import "./CareerMiddleContainer.css";
import CustomModal from "../../../Components/Modal/Modal";
function CareerMiddleContainer({ openModal }) {
  return (
    <div>
      <MiddleTopContainer />
      <MiddleMainContainer />
      <MiddleBottomContainer openModal={openModal} />
    </div>
  );
}

export default CareerMiddleContainer;
