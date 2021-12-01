import React, { useState } from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations'
import './Resume.css'


function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    // implement fadeEffect and Smooth scroll
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
            </div>
            
        </div>
    );
}

export default Resume;