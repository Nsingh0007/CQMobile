import React, { useState } from "react";
import { CareerSVG } from "../../assets/icons/Icon-container";
import { SVG } from "../../assets/icons/icons-png";

import Footer from "../../Components/Footer/Footer";
import CustomModal from "../../Components/Modal/Modal";
import TopContainer from "../../Components/Top-Container/TopContainer";
import "../../css/Career.css";
import CareerMiddleContainer from "./Career-Middle-Container/CareerMiddleContainer";

function Career() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Job, setJob] = useState({});
  function openModal(Job) {
    setIsOpen(true);
    setJob(Job);
  }
  const TopContent = {
    heading: "Join us in the journey to best",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding",
    cardImg: <CareerSVG className="common-card-image" />,
    classname: "top-content",
  };
  return (
    <>
      <div className="main">
        <CustomModal
          job={Job}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          setJob={setJob}
        />
        <div class={modalIsOpen && "career-parallax"}>
          <div class="parallax__layer parallax__layer--back career">
            <TopContainer TopContent={TopContent} />
          </div>
          <div class="parallax">
            <div class="parallax__layer-1 parallax__layer--base team-parallax">
              <CareerMiddleContainer openModal={openModal} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
