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

  const projectDetails = [
    { 
      title: "InstantGifts",
      duration: {fromDate: '2021', toDate: '2021'},
      description : "Personal project. Creating whole website using React (front-end) and setting database by using Ruby on Rails (back-end), deployed through Heroku.",
      subHeading: "Sending gifts to loved ones through email or phone number"
    },
    { 
      title: "Pookeepers",
      duration: {fromDate: '2021', toDate: '2021'},
      description : "Developed website using React(front-end) and tailwind CSS, setting up back-end database using Ruby and SQLite3, creating routes by using Sinatra.",
      subHeading: "Creating website for zookeepers who can manage animal-care logs"
    },
    { 
      title: "Flatironeats",
      duration: {fromDate: '2021', toDate: '2021'},
      description : "Making webapp using React, increasing visuality using CSS and Semantic-ui, creating data using db.json and integrating front-end and the database.",
      subHeading: "Food shopping and delivery app for hungry coders"
    },
    { 
      title: "Blog-app",
      duration: {fromDate: '2021', toDate: '2021'},
      description : "Creating blog web-app by using React (front-end) and Ruby on rails (back-end), also User authentication that allows to manage user's CRUD.",
      subHeading: "Writing your own blog and watching others! "
    }
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
