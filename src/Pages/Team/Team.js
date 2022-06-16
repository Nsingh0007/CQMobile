import React from "react";
import { TeamSVG } from "../../assets/icons/Icon-container";
import { SVG } from "../../assets/icons/icons-png";
import ProfileContainer from "../../Components/Card/ProfileCard/ProfileContainer";
import Container from "../../Components/CommonContainer/CommonContainer";
import Footer from "../../Components/Footer/Footer";
import TopContainer from "../../Components/Top-Container/TopContainer";
import "../../css/Team.css";
import { ProfileData } from "../../Data/DummyData";
function Team() {
  const TopContent = {
    heading: "Meet the founders & Team",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding",
    cardImg: <TeamSVG/>,
    classname: "top-content",
  };

  return (
    <>
      <div class="parallax__layer parallax__layer--back teampage">
       
        <TopContainer TopContent={TopContent} />
      </div>
      <div class="parallax">
        <div class="parallax__layer-1 parallax__layer--base team-parallax">
          <Container inner="team-container top-home-container">
            <h3 className="head-title">A - Team</h3>
            <p>
              Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding way. {window.innerWidth}X{window.innerHeight}
            </p>
            <div className="background-blur-team"></div>
          </Container>
          <Container inner="profileContainer">
            {ProfileData.map((profile, index) => (
              <ProfileContainer
                customstyle="profile-style1"
                profileContent="profile-content1"
                profile={profile}
                key={index}
              />
            ))}
          </Container>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Team;
