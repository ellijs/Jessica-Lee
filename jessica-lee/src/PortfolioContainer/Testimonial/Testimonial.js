import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations'


// npm i react-owl-carousal
function Testimonial(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = () => ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    return (
        <div>
            
        </div>
    );
}

export default Testimonial;