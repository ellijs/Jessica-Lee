import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className='resume-heading'>
      <div className='resume-main-heading'>
        <div className='heading-bullet'>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: 'work-history.svg' },
    { label: "Programming Skills", logoSrc: "programming-skills.svg"},
    { label: "Projects", logoSrc: "projects.svg"},
    { label: "Interests", logoSrc: "interests.svg"}
  ];

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 90 },
    { skill: "Ruby", ratingPercentage: 90 },
    { skill: "Python", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 85 },
    { skill: "Ruby on Rails", ratingPercentage: 90 },
    { skill: "Git", ratingPercentage: 85 },
  ]

  // implement fadeEffect and Smooth scroll
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='resume-container screen-container' id={props.id || ""}>
      <div className='resume-content'>
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}

export default Resume;
