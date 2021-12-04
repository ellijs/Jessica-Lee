import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

// npm i react-owl-carousel

function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = () =>
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    // Adding Own-carousel Animation moving from right to left in 1 sec. {...options}
    const options = {
      loop: true,
      margin: 0,
      nav: true,
      animateIn: 'bounceInRight',
      animateOut: 'bounceOutRight',
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
      }
    }

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My People Say About Me"}
      />
      <section className='testimonial-section' id={props.id || ""}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options} >

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                        <i className='fa fa-quote-left'/>
                      I patronized Jessica and when He delivered, I honestly
                      fell in love with the project. She is a very honest guy
                      and she delivers ontime.
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star-half-alt'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                      <img src='img/Testimonial/lady.png' alt='no internet connection'></img>
                      <h5>Daisy Dominic</h5>
                      <p>CEO FininceGlobal</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                        <i className='fa fa-quote-left'/>
                      I patronized Jessica and when He delivered, I honestly
                      fell in love with the project. She is a very honest guy
                      and she delivers ontime.
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star-half-alt'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                      <img src='img/Testimonial/man.png' alt='no internet connection'></img>
                      <h5>Gary Lee</h5>
                      <p>CEO New SAANY Corp</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                        <i className='fa fa-quote-left'/>
                      I patronized Jessica and when He delivered, I honestly
                      fell in love with the project. She is a very honest guy
                      and she delivers ontime.
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star-half-alt'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                      <img src='img/Testimonial/daisy.jpg' alt='no internet connection'></img>
                      <h5>Daisy Dominic</h5>
                      <p>CEO FininceGlobal</p>
                  </div>
                </div>
              </div>


              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                        <i className='fa fa-quote-left'/>
                      I patronized Jessica and when He delivered, I honestly
                      fell in love with the project. She is a very honest guy
                      and she delivers ontime.
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star-half-alt'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                      <img src='img/Testimonial/ehiz.jpg' alt='no internet connection'></img>
                      <h5>Daisy Dominic</h5>
                      <p>CEO FininceGlobal</p>
                  </div>
                </div>
              </div>


              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                        <i className='fa fa-quote-left'/>
                      I patronized Jessica and when He delivered, I honestly
                      fell in love with the project. She is a very honest guy
                      and she delivers ontime.
                      <i className='fa fa-quote-right'></i>
                    </p>
                    <ul>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star-half-alt'></i>
                        </li>
                        <li className='stars list-unstyled'>
                            <i className='fa fa-star'></i>
                        </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                      <img src='img/Testimonial/mike.png' alt='no internet connection'></img>
                      <h5>Daisy Dominic</h5>
                      <p>CEO FininceGlobal</p>
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
