import React from "react";
import { SVG } from "../../../../assets/icons/icons-png";
import Container from "../../../../Components/CommonContainer/CommonContainer";

function MiddleMainContainer() {
  const Data = [
    {
      heading: "Health comes first",
      text: "We act like owners — This is our company. We own the problems and challenges with commitment. ",
    },
    {
      heading: "Flexible working hours",
      text: "We act like owners — This is our company. We own the problems and challenges with commitment. ",
    },
    {
      heading: "Take time off",
      text: "We act like owners — This is our company. We own the problems and challenges with commitment. ",
    },
  ];
  const TextContainer = ({ content }) => {
    return (
      <div className="text-container">
        <h3>
          <span>⬤</span>
          {content.heading}
        </h3>
        <p>{content.text}</p>
      </div>
    );
  };
  return (
    <Container inner="cheq-container">
      <h3 className="head-title">Life at Cheq</h3>
      <Container inner="cheq-content">
        <div className="cheq-left">
          {Data.map((content, key) => (
            <TextContainer key={key} content={content} />
          ))}
        </div>
        <div className="cheq-right">
          <div className="imageContainer">
            <div className="item">
              <img src={SVG.LIFE_AT_CHEQ1} />
            </div>
            <div className="item">
              <img src={SVG.LIFE_AT_CHEQ2} />
            </div>
            <div className="item big">
              <img src={SVG.LIFE_AT_CHEQ3} />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default MiddleMainContainer;
