import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SVG } from "../../assets/icons/icons-png";
import {MenuIcon,BurgerMenu,CheqLogo} from "../../assets/icons/Icon-container"
import $ from "jquery";
import Button from "../Button/Button";

import "./Header.css";
function Header() {
  const nav = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  let Home = null;
  let Team = null;
  let Investors = null;
  let ContactUs = null;

  useEffect(() => {
    // window.scrollTo(1436,1436)

   



    document.querySelector('.parallax__layer--base').scrollTo(0,0)
    Home = document.getElementsByClassName("parallax__layer")[0];

    Team = document.getElementsByClassName("people-container")[0];

    Investors = document.getElementsByClassName("top-main-content")[0];

    // ContactUs = document.getElementsByClassName("top-main-content")[0];
  }, []);
  function doScrolling(elementY, duration = 500) {
    let startingY = window.pageYOffset;
    let diff = elementY;
    let start;

    if (diff == 0) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    else {
      console.log("first", diff);
      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        // Elapsed milliseconds since start of scrolling.
        let time = timestamp - start;
        // Get percent of completion in range [0, 1].
        let percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
          window.requestAnimationFrame(step);
        }
      });
    }
  }
  function scroll(element){   
    
    var ele = document.getElementsByClassName("top-main-content")[0];   
    console.log("ele",ele.offsetTop)
    window.scrollTo(ele.offsetLeft,ele.offsetTop); } 
  
  return (
    <div className="header-container">
      <div className="header-main">
        <div className={`hamburger-icon`} onClick={() => setIsOpen(!isOpen)}>
          
          {!isOpen ? <MenuIcon className="icon"/> : <BurgerMenu className="icon"/>}
          {/* <img src={isOpen ? SVG.CROSS_ICON : SVG.BURGER} className="icon" /> */}
        </div>
        <div className="header-logo">
          <CheqLogo className="head-icon cheq-icon" />
          {/* <img src={SVG.CHEQ_LOGO} className="head-icon cheq-icon" /> */}
        </div>
        <div className="right-side">
          <div className={`header-link-container ${isOpen && "drawer-open"}`}>
            <div className="drawer-top">
              <div
                onClick={() => {
                  setIsOpen(false);
                  console.log("first")
                  nav("/")
                  // doScrolling(Home.getBoundingClientRect().top);
                  
                  scroll()
                }}
              >
                Home
              </div>
              <div
                onClick={() => {
                  nav("/team")
                  
                  setIsOpen(false);
                  scroll()
                }}
              >
                Team
              </div>
              <div
                onClick={() => {
                 
                  
                  setIsOpen(false);
                  scroll()
                }}
              >
                Investors
              </div>
              <div
                onClick={() => {
                  nav("/career")
                  // doScrolling(ContactUs.getBoundingClientRect().y);
                  setIsOpen(false);
                  scroll()
                }}
              >
                Carrers
              </div>
            </div>
            <div className="drawer-bottom"></div>
          </div>
          <Button bttnClass="join-btn">Join Us</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
