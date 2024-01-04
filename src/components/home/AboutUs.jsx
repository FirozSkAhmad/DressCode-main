import React from 'react';
import "./about.css";

const AboutUs = () => {
    return (
        <div className='about__Wrap'>
            <div className='about__Sec'>
                <div className='about__Ttl'>
                    <h2>
                        About Us
                    </h2>
                </div>
                <div className='about__Row'>
                    <div className='abt_Img'>
                        <img src='assets/images/about.png' alt='about'></img>
                    </div>
                    <div className='abt_para abt_para1'>
                        <h3>
                            Our Humble Beginnings
                        </h3>
                        <p>
                            DressCode Elevating Excellence.
                            Unparalleled quality, innovation, and
                            service tailored to your needs. Embark
                            on a journey with us for the finest in business attire.
                        </p>
                    </div>
                </div>
                <div className='about__Row about__Row2'>
                    <div className='abt_para abt_para2'>
                        <h3>
                            A Brand is Born
                        </h3>
                        <p>
                            We are delighted to announce the launch
                            of our new brand StuX. to underscore our
                            commitment to transformation and your
                            evolving expectations.
                        </p>
                        <div className='abt_Cta'>
                            <button>
                                <div className='arrow'>
                                    <img src='assets/images/arrow.png' alt='arrow'></img>
                                </div>
                                <span>Know More</span>
                            </button>
                        </div>
                    </div>
                    <div className='abt_para abt_para3'>
                        <h3>
                            Our Humble Beginnings
                        </h3>
                        <p>
                            DressCode Elevating Excellence.
                            Unparalleled quality, innovation,
                            and service tailored to your needs.
                            Embark on a journey with us for the
                            finest in business attire.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs