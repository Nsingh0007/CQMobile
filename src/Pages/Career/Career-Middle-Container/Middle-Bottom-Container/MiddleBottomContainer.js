import React, { useState } from "react";
import { Location } from "../../../../assets/icons/Icon-container";
import { SVG } from "../../../../assets/icons/icons-png";
import Card from "../../../../Components/Card/Card";
import Container from "../../../../Components/CommonContainer/CommonContainer";
import CustomModal from "../../../../Components/Modal/Modal";
import Slider from "../../../../Components/Slider/Slider";
import { JobData } from "../../../../Data/DummyData";

function MiddleBottomContainer({ openModal }) {
  const JobCard = ({ job }) => {
    return (
      <Card clickHandler={openModal} container="job-card">
        <div className="job-info">
          <div className="job-card-head">
            <span>
              <img src={job.profile_pic} className="card-image" />
            </span>
            <h3>{job.heading}</h3>
          </div>
          <p className="job-card-sub-head">
            <Location LocationClass="icon" />
            {/* <img src={SVG.LOCATION_ICON} className="icon" /> */}
            {job.city}
          </p>
        </div>
        <div className="job-details">
          <p className="detail-head">Details</p>
          <p className="job-content">{job.content}</p>
          <p className="know" onClick={() => openModal(job)}>
            Know More
            <span>
              <img src={SVG.ARROW} />
            </span>
          </p>
          <button
            onClick={(e) => {
              window.location.href = "mailto:help@cheq.one";
              e.preventDefault();
            }}
            className="apply-btn"
          >
            Apply
          </button>
        </div>
      </Card>
    );
  };


  return (
    <>
      <Container inner="job-container">
        <h3 className="head-title">Job openings</h3>
      <Slider sliderInner="openinng">
        <div className="tag-container">
          <button className="pill">Design</button>
          <button className="pill">Product</button>
          <button className="pill">Marketing</button>
          <button className="pill">Business</button>
        </div>
        </Slider>
        <Slider sliderOuter="job-slider-outer" sliderInner="job-slider">
          {JobData.map((job, index) => (
            <JobCard job={job} key={index} />
          ))}
        </Slider>
      </Container>
    </>
  );
}

export default MiddleBottomContainer;
