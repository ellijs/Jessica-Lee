import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

// npm i react-owl-carousal
function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = () =>
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My People Say About Me"}
      />
      <section className='testimonial-section' id={props.id || ""}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel className='owl-carousel' id='testimonial-carousel'>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      I patronized Jessica and when He delivered, I honestly
                      fell in love with the project. She is a very honest guy
                      and she delivers ontime.
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
