import React, { useEffect, useState } from "react";
import Container from "../CommonContainer/CommonContainer";
import "./TopContainer.css";

function TopContainer({ TopContent }) {
  // const [position, setPosition] = useState(window.pageYOffset);
  // const [visible, setVisible] = useState(true);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = window.pageYOffset;

  //     setVisible(position > moving);
  //     setPosition(moving);
  //   };
  //   function scrollFunction() {
  //     if (
  //       document.body.scrollTop > 50 ||
  //       document.documentElement.scrollTop > 50
  //     ) {
  //       document.getElementsByClassName("top-head-box").style.height = "30px";
  //     } else {
  //       document.getElementsByClassName("top-head-box").style.height = "100%";
  //     }
  //   }
  //   window.addEventListener("scroll", scrollFunction);
  //   return () => {
  //     window.removeEventListener("scroll", scrollFunction);
  //   };
  // });
  // const cls = visible ? "visible" : "hidden";
  return (
    <div className="top-head-box">
      <Container
        inner={`commonClass ${TopContent.classname && TopContent.classname}`}
      >
        <h2>{TopContent.heading}</h2>
        <p>{TopContent.subText}</p>

        <img className="common-card-image" src={TopContent.cardImg} />
      </Container>
    </div>
  );
}

export default TopContainer;
