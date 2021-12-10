import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Testimonial.css";

// npm i react-owl-carousel

function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // Adding Own-carousel Animation moving from right to left in 1 sec. {...options}
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My People Say About Me"}
      />
      <section className='testimonial-section fade-in' id={props.id || ""}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel
              className='owl-carousel'
              id='testimonial-carousel'
              {...options}
            >
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />I patronized Jessica and
                      when He delivered, I honestly fell in love with the
                      project. She is a very honest guy and she delivers ontime.
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        {/* <i className='fa fa-star-half-alt'></i> */}
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src='img/Testimonial/lady.png'
                      alt='no internet connection'
                    ></img>
                    <h5>Maggie Dominic</h5>
                    <p>CEO FininceGlobal</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      She tried to listen to team members and figure out the
                      best idea that they could agree with because she knows
                      cooperation makes the best output.
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src='img/Testimonial/man.png'
                      alt='no internet connection'
                    ></img>
                    <h5>Gary Lee</h5>
                    <p>CEO New SAANY Corp</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      Highly organized, fast learner and problem solver,
                      embarking on software engineering career after 10 years in
                      business managements.
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src='img/Testimonial/daisy.jpg'
                      alt='no internet connection'
                    ></img>
                    <h5>Daisy Steward</h5>
                    <p>CEO of HappyDogs</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      Jessica is open-minded, can fit harmoniously with new
                      people, accept differences between cultures. She is
                      "People person".
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt'></i>
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src='img/Testimonial/ehiz.jpg'
                      alt='no internet connection'
                    ></img>
                    <h5>Luke Lee</h5>
                    <p>SWE at Betterment</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      Jessica is reliable and responsible person because she
                      always tries to put all her effort and do her best on the
                      task she has to deal with.
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src='img/Testimonial/mike.png'
                      alt='no internet connection'
                    ></img>
                    <h5>Ted Yoo</h5>
                    <p>New SAANY corp.</p>
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
