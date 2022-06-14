import React from "react";
import { SVG } from "../../../assets/icons/icons-png";
import Header from "../../../Components/Header/Header";
import Container from "../../../Components/CommonContainer/CommonContainer";
import CommonContainer from "../../../Components/Top-Container/TopContainer";
import "./CareerTopContainer.css";
function CareerTopContainer() {
  const TopContent = {
    heading: "Join us in the journey to best",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding",
    cardImg: SVG.BIAS_ACTION,
    classname: "",
  };
  return (
    <Container outer="top-container" inner="top-main-container">
      <CommonContainer TopContent={TopContent} />
    </Container>
  );
}

export default CareerTopContainer;
