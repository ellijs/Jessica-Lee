import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  // implement fadeEffect and Smooth scroll
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // Reusable minor components
  const ResumeHeading = (props) => {
    return(
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className='heading-date'>
                {props.fromDate + " - " + props.toDate}
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
    )
  };

  // Static Resume data for the labels
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
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
  ];

  const projectDetails = [
    {
      title: "InstantGifts",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Personal project. Creating whole website using React (front-end) and setting database by using Ruby on Rails (back-end), deployed through Heroku.",
      subHeading: "Sending gifts to loved ones through email or phone number",
    },
    {
      title: "Pookeepers",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Developed website using React(front-end) and tailwind CSS, setting up back-end database using Ruby and SQLite3, creating routes by using Sinatra.",
      subHeading:
        "Creating website for zookeepers who can manage animal-care logs",
    },
    {
      title: "Flatironeats",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Making webapp using React, increasing visuality using CSS and Semantic-ui, creating data using db.json and integrating front-end and the database.",
      subHeading: "Food shopping and delivery app for hungry coders",
    },
    // {
    //   title: "Blog-app",
    //   duration: { fromDate: "2021", toDate: "2021" },
    //   description:
    //     "Creating blog web-app by using React (front-end) and Ruby on rails (back-end), also User authentication that allows to manage user's CRUD.",
    //   subHeading: "Writing your own blog and watching others! ",
    // },
  ];


  // Rendering Project Details - Array
  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={"Flatiron School"}
        subHeading={"Certification of Full-stack software Engineer"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Sogang University, Korea"}
        subHeading={
          "Major in Communications, double majored in English Literatures"
        }
        fromDate={""}
        toDate={""}
      />
    </div>,

  
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'>

          <ResumeHeading
            heading={"Paris Bagutte"}
            subHeading={"General manager"}
            fromDate={"12/16"}
            toDate={"11/19"}
          />
    
          <div className='experience-description'>
            {/* <span className='resume-description-text'>
              General Manager
            </span> */}
          </div>
    
          <div className='experience-description'>
            <span className='resume-description-text'>
              - Managed business, orginized crews
            </span>
            <br />
            <span className='resume-description-text'>
              - Analyzed sales, marketing store
            </span>
            <br />
            <span className='resume-description-text'>
              - Opened business, made it successful
            </span>
          </div>

          <div className='space'></div>
    
          <ResumeHeading
            heading={"New SAANY corp."}
            subHeading={"Assistant/General manager"}
            fromDate={"07/08"}
            toDate={"12/16"}
          />
    
          <div className='experience-description'>
            {/* <span className='resume-description-text'>
              Assistant/General Manager
            </span> */}
          </div>
    
          <div className='experience-description'>
            <span className='resume-description-text'>
              - Assisted owner chef, ran business
            </span>
            <br />
            <span className='resume-description-text'>
              - Managed business, increased sales
            </span>
            <br />
            <span className='resume-description-text'>
              - Suggested marketing solutions
            </span>
            <br/>
          </div>

        </div>
      </div>
      ,

    
      <div 
        className='resume-screen-container programming-skills-container' key='programming skills'
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className='skill-parent' key={index}>
            <div className='heading-bullet'></div>
            <span>{skill.skill}</span>
            <div className='skill-percentage'>
              <div
                className='active-percentage-bar'
                style={{ width: skill.ratingPercentage + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,

    
      <div className='resume-screen-container' key='projects'>
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,

     
      <div className='resume-screen-container' key='interests'>
        <ResumeHeading
          heading='Pilates'
          description='Learn body balancing, patience and perserverance.'
        />
        <ResumeHeading
          heading='Traveling'
          description='Adventurous, Looking forward to meeting new people, cultures and delicious foods.'
        />
        <ResumeHeading
          heading='Hiking'
          description='Feeling accomplished at the peak, getting rid of stress, feeling refreshed while sweating.'
        />
      </div>
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index)
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="Oops...No Internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
      style={carousalOffSetStyle.style}
      className='resume-details-carousal'
      >
      {resumeDetails.map((ResumeDetail)=> ResumeDetail)}
      </div>
    )
  };

  // useEffect(() => {
  //   return () => {
  //     /* UNSUBSCRIBE THE SUBSCRIPTIONS */
  //     fadeInSubscription.unsubscribe();
  //   };
  // }, [fadeInSubscription]);

  return (
    <div className='resume-container screen-container fade-in' id={props.id || ""}>
      <div className='resume-content'>
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>

          <div className='resume-bullet-details'>{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
