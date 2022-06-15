import React, { useEffect, useState } from "react";
import { SVG } from "../../assets/icons/icons-png";
import Button from "../../Components/Button/Button";
import ProfileContainer from "../../Components/Card/ProfileCard/ProfileContainer";
import Container from "../../Components/CommonContainer/CommonContainer";
import Slider from "../../Components/Slider/Slider";
import Slider1 from "../../Components/Slider/Slider1";
import TopContainer from "../../Components/Top-Container/TopContainer";
import "../../css/Home.css";
import Footer from "../../Components/Footer/Footer";
import { NewsData, ProfileData } from "../../Data/DummyData";
import LeftMobile from "../../assets/Images/DEVICES/left_mobile.png"
import RightMobile from "../../assets/Images/DEVICES/Right_mobile.png"
import MiddleMobile from "../../assets/Images/DEVICES/Middle_mobile.png"

import {

  MultiTaskingImage,

} from "../../assets/icons/Icon-container";
import { useNavigate } from "react-router-dom";

function Home() {
  const [rotateRight, setRotateRight] = useState(320);
  const [rotateLeft, setRotateLeft] = useState(42);
  const [opacity, setOpacity] = useState(1);
  const TopContent = {
    heading: "Track and pay bills of all your Debt",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding way.",
    cardImg: SVG.MOBILE_PIC,
    classname: "top-content",
  };
  let lastScrollTop = 0;
  function dir() {
    const position = window.scrollY;
    let opa = (opacity / position) * 5;
    let right = rotateRight + position / 0.48;
    let left = rotateLeft - position / 0.51;

    // or window.addEventListener("scroll"....
    let st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      // downscroll code
console.log("down")
      if (position > 0) {
        setOpacity(opa);
        if (322 < right && right < 366) {
          console.log("righttt", right);
          setRotateRight(right);
        } else {
        }
        if (-10 < left && left < 42) {
          console.log("first", left, 0 < left && left < 42);

          setRotateLeft(left);
        }
      }
    } else {
      //scroll up
      if (window.scrollY > 1) {
        setOpacity(opa * 10);

        if (!322 < right && right < 366) {
          setRotateRight(right);
        } else {
        }
        if (!0 < left && left < 42) {
          setRotateLeft(left);
        }
      }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
  const handleScroll = () => {
    dir();
  };

const mobileScroll=(e)=>{
  let touchStartPosX = 0;
  // Different devices give different values with different decimal percentages.
  const currentPageX = Math.round(e.changedTouches[0].scrollY);
  if (touchStartPosX === currentPageX) return;

  if (touchStartPosX - currentPageX > 0) {
    if(currentPageX<499){
       console.log("down");
    }
   
  } else {
    console.log("up");
  }
  touchStartPosX = currentPageX;
  
}



  // useEffect(() => {
  //   let touchStartPosX = 0;
    
  //   window.addEventListener('touchmove', (e) => {
  //    // Different devices give different values with different decimal percentages.
  //     const currentPageX = Math.round(e.changedTouches[0].screenY);
  //     if (touchStartPosX === currentPageX) return;
  
  //     if (touchStartPosX - currentPageX > 0) {
  //       console.log("down");
  //       setRotateRight(currentPageX)
  //       setRotateLeft(-currentPageX)
  //     } else {
  //       console.log("up",currentPageX);
  //       setRotateRight(currentPageX)
  //       setRotateLeft(-currentPageX)
  //     }
  //     touchStartPosX = currentPageX;
  //   });
  



  //   // window.addEventListener("scroll", handleScroll);
   
  //   // return () => {
  //   //   window.removeEventListener("scroll", handleScroll);
  //   // };
  // }, []);
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
  };
  return (
    <>
      <div className="parallax">
        <div class="parallax__layer parallax__layer--back">
          <Container
            inner={`commonClass ${
              TopContent.classname && TopContent.classname
            }`}
          >
            <h2 style={{ opacity: opacity }}>{TopContent.heading}</h2>
            <p style={{ opacity: opacity }}>{TopContent.subText}</p>
          </Container>
        </div>

        <div className="parallax-mobile-container Mobile-image-container">
          <div className="Mobile-box">
            <div
              style={{ transform: `rotate(${rotateRight}deg)` }}
              className={`left-mobile-pic `}
            >
              <img src={LeftMobile}  className="side-mobile" />
              
            </div>
            <div
              style={{ transform: `rotate(${rotateLeft}deg)` }}
              className={`right-mobile-pic `}
            >
              <img src={RightMobile} className="side-mobile"/>

              
            </div>
            <div className="middle-mobile-pic">
            <img src={MiddleMobile} className="middle-mobile" />

              
            </div>
          </div>
        </div>
        <div className="parallax__layer-1 parallax__layer--base">
          <Container inner="people-container">
            <div className="top-home-container">
              <h3 className="head-title">Our People</h3>
              <p>
                We’re excited to announce that CheQ has raised in seed funding
                from ABC
              </p>
            </div>
            <div className="people-bottom-container">
              <div className="flex-left left-style">
                <div className="side-container">
                  <h3 className="head-title">Our People</h3>
                  <p>
                    We’re excited to announce that CheQ has raised in seed
                    funding from ABC
                  </p>
                </div>
                <Button
                  handleFunction={() => handleNavigate("team")}
                  bttnClass="people-btn"
                >
                  See All
                </Button>
              </div>
              <div className="flex-right right-style">
                <Slider1 />
              </div>
            </div>
            <div className="background-blur"></div>
          </Container>
          <Container inner="home-middle-container" >
            <div className="flex-left blessed-left-flex">
              <h3 className="blessed-title head-title">Blessed & Backed by</h3>
              <p className="blessed-text-content">
                <span className="party-icon">
                  <img src={SVG.PARTY_ICON} />
                </span>
                <span>
                  We’re excited to announce that CheQ has raised{" "}
                  <span className="bold">$34</span> in seed funding from {"\n"} ABC
                </span>
              </p>
            </div>
            <div className="flex-right boxes-container">
              <div className="square-box"></div>
              <div className="square-box"></div>
              <div className="square-box"></div>
              <div className="square-box"></div>
            </div>
          </Container>
          <Container inner="home-middle-container-1">
            <h3 className="news-title">In News</h3>
            <Slider sliderInner="news-icon-container">
              {NewsData.map((newsIcon, index) => (
                <img key={index} src={newsIcon.img} className="news-icon" />
              ))}
            </Slider>
          </Container>
          <div className="top-main-content">
            <div className="left-content">
              <h2>Join us on this Journey</h2>
              <p>
                We’re excited to announce that CheQ has raised in seed funding
                from ABC
              </p>
              <Button
                handleFunction={() => handleNavigate("career")}
                bttnClass="people-btn-top"
              >
                Explore Opportunity
              </Button>
            </div>
            <div className="right-content">
              <MultiTaskingImage MultiTaskClass="multi-task-image" />
            </div>
            <Button
              handleFunction={() => handleNavigate("career")}
              bttnClass="people-btn-below"
            >
              Explore Opportunity
            </Button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
