import React, { useEffect } from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations'
import "./AboutMe.css";

function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

        const SCREEN_CONSTANTS = {
            description: "Full stack developer. Highly organized, fast learner and problem solver, embarking on software engineering career after 10 years in business management.",
            highlights : {
                bullets: [
                    "Full Stack web development",
                    "Interactive Front End engineer",
                    "React JS and State Management",
                    "Building REST API",
                    "Effective Back End Ruby on Rails",
                    "Managing database"
                ],
                heading: "Here are few Highlights:"                     
            }
        }

        const renderHighlight = () => {
            return (
                SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                    <div className ='highlight' key={i}>
                        <div className ='highlight-blob'>
                        </div>
                        <span>{value}</span>
                    </div>
                ))
            )
        }


    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href="https://docs.google.com/document/d/     1543caEa2yocJADDpVmT6Gq9bD--ejZ36lHdmLicnbOs/edit?usp=sharing"      download='Jessica Lee.pdf'>
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default AboutMe;