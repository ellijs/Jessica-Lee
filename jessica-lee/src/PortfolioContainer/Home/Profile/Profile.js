import React from 'react';
import "./Profile.css";
import Typical from 'react-typical'

export default function Profile() {
    // Main Page
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile=details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.facebook.com/jessica.lee.77128">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jessica-jisun-lee/">
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href="https://twitter.com/ellijs0623">
                                <i className='fa fa-twitter'></i>
                            </a>
                           <a href='https://github.com/ellijs'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href="https://ellijs0623.medium.com/">
                                <i className='fa fa-medium'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Jessica Lee</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                              <Typical loop={Infinity} steps={[
                                    'Ethusiastic SWE 💻', 
                                    1500, 
                                    'Full Stack Developer 👩🏻‍💻', 
                                    1500, 
                                    'Passionate Worker! ❤️‍🔥 ', 
                                    1500, 
                                    // 'React Developer 📱', 
                                    // 1500
                              ]}
                              />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building application with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="https://docs.google.com/document/d/1543caEa2yocJADDpVmT6Gq9bD--ejZ36lHdmLicnbOs/edit?usp=sharing" download='Jessica Lee.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}