import React, { useEffect, useState } from "react";
import Container from "../CommonContainer/CommonContainer";
import "./TopContainer.css";

function TopContainer({ TopContent }) {
 
  return (
    <div className="top-head-box">
      <Container
        inner={`commonClass ${TopContent.classname && TopContent.classname}`}
      >
        <h2>{TopContent.heading}</h2>
        <p>{TopContent.subText}</p>
        {TopContent.cardImg}
        {/* <img className="common-card-image" src={TopContent.cardImg} /> */}
      </Container>
    </div>
  );
}

export default TopContainer;
