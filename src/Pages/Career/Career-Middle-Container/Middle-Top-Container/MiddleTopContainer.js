import React from "react";
import { SVG } from "../../../../assets/icons/icons-png";
import Card from "../../../../Components/Card/Card";
import Container from "../../../../Components/CommonContainer/CommonContainer";
import { ValueData } from "../../../../Data/DummyData";

function MiddleTopContainer() {
  const ValueCard = ({ data }) => {
    return (
      <Card container="value-card">
        <img src={data.image} alt="" />
        <h3>{data.header}</h3>
        <p>{data.text}</p>
      </Card>
    );
  };
  return (
    <>
      <Container outer="" inner="middle-container">
        <h3 className="head-title">Core Values</h3>
        <Container outer="" inner="flex-container">
          {ValueData.map((data, index) => (
            <ValueCard key={index} data={data} />
          ))}
        </Container>
        <div className="background-blur"></div>
      </Container>
    </>
  );
}

export default MiddleTopContainer;
