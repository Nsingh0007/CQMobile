import React from "react";
import "./ProfileContainer.css";
function ProfileContainer({ profile, customstyle, profileContent }) {
  return (
    // <div className={`image-box ${customstyle && customstyle}`}>
    <div className={`profile-content-box ${customstyle && customstyle}`}>
      <div className="profile-img-background">
        <img src={profile.profile_pic} className="profile-pic" />
      </div>
      <div className={`profile-details ${profileContent && profileContent}`}>
        <h4>{profile.name}</h4>
        <p>{profile.designation}</p>
        <p>{profile.company}</p>
      </div>
    </div>
    // </div>
  );
}

export default ProfileContainer;
