import Modal from "react-modal";
import React, { useState } from "react";
import Card from "../Card/Card";
import { SVG } from "../../assets/icons/icons-png";
import "./Modal.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    overflowX: "hidden",
  },
};
Modal.setAppElement("#root");
const CustomModal = ({ job, modalIsOpen, setJob, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
    setJob({});
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <Card container="job-card-modal">
        <div className="close-btn" onClick={() => closeModal()}>
          {" "}
          <img src={SVG.CLOSE_ICON} className="close-icon" />
        </div>
        <div className="job-modal-info">
          <div className="job-card-head-modal">
            <span>
              <img src={job?.profile_pic} className="card-image" />
            </span>
            <h3>{job?.heading}</h3>
          </div>
          <p className="job-card-sub-head-modal">
            <img src={SVG.LOCATION_ICON} className="icon" />
            {job?.city}
            <span>
              {"("}On Site{")"}
            </span>
          </p>
        </div>
        <div className="job-details-modal">
          <p className="detail-head">Details</p>
          <p className="job-content">{job?.content}</p>
          <div className="job-details-point">
            <p>
              <span>●</span>A product designer is responsible for the design and
              development of consumer products.
            </p>
            <p>
              <span>●</span>A product designer is responsible for the design and
              development of consumer products.
            </p>
            <p>
              <span>●</span>A product designer is responsible for the design and
              development of consumer products.
            </p>
            <p>
              <span>●</span>A product designer is responsible for the design and
              development of consumer products.
            </p>
            <p>
              <span>●</span>A product designer is responsible for the design and
              development of consumer products.
            </p>
          </div>
          <button className="apply-btn modal-btn">
            Apply
            <span className="right-direction">
              <img src={SVG.RIGHT_DIRECTION} />
            </span>
          </button>
        </div>
      </Card>
    </Modal>
  );
};
export default CustomModal;
