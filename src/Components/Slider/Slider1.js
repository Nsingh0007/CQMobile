import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import $ from "jquery";
import "./Slider1.css";
import { ProfileData } from "../../Data/DummyData";
import ProfileContainer from "../Card/ProfileCard/ProfileContainer";
import { SVG } from "../../assets/icons/icons-png";

const Slider1 = () => {
  const ProfileDataSort = ProfileData;

  const scroll = (direction) => {
    let far = $(".image-slider").width() * direction * 0.25;

    let pos = $(".image-slider").scrollLeft() + far;
    $(".image-slider").animate({ scrollLeft: pos }, 370);
    console.log(far, pos);
  };
  return (
    <div >
      {/* <div className="arrow prev" onClick={() => scroll(-1)}>
        <img src={SVG.ARROW} className="arrow-icon" />
      </div> */}
      {/* <div className="arrow next" onClick={() => scroll(1)}>
        <img src={SVG.ARROW} className="arrow-icon" />
      </div> */}

      <div className="image-slider " style={{overflowX:'scroll'}}>
        {ProfileDataSort.map((profile, index) => (
          <ProfileContainer
            customstyle="profile-style"
            profileContent="profile-content-style"
            profile={profile}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider1;
