import React, { useState } from 'react';
import Typical from 'react-typical';

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

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    return (
        <div className='main-container' id={props.id || ''}>
            <ScreenHeading 
            subHeading={"Let's Keep In Touch"}
            title={'Contact Me'}
            />
            <div className='central-form'>
                <div className='col'>
                    <h2 className='title'>
                        <Typical loop={Infinity} steps={[
                            'Get In Touch 📧', 
                                1500, 
                            'Email Me... 💌',
                                1500,
                        ]}
                        />
                    </h2>
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
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>
                            Send Your Email Here!
                        </h4>
                        <img src={imgBack} alt='image not found'/>
                    </div>
                    <form>
                        <p>
                            {banner}
                        </p>
                        <label htmlFor='name'>Name</label>
                        <input type='text'></input>
                        <label htmlFor='email'>Email</label>
                        <input type='text'></input>
                        <label htmlFor='message'>Message</label>
                        <input type='text'></input>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default ContactMe;