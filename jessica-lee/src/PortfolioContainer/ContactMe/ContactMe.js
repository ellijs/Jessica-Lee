import React from 'react';
import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';



function ContactMe(props) {
    
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = () => ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    return (
        <div className='main-container' id={props.id || ''}>
            <ScreenHeading 
            subHeading={"Let's Keep In Touch"}
            title={'Contact Me'}
            />
            
        </div>
    );
}

export default ContactMe;