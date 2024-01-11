import React from 'react';
import "./ourservices.css";

import Fade from 'react-reveal/Fade';



const OurServices = () => {
    return (
        <div className='ourService__Wrap'>
            <div className='ourService__Sec'>
                <div className='ser__Ttl'>
                    <Fade bottom duration={1000}>
                        <h2>
                            Our Services
                        </h2>
                    </Fade>
                </div>
                <div className='or_Ser-card'>
                    <div className='or_sr-cd or_sr-cd1'>
                        <div className='or_sr-ovl or_sr-ovl1'></div>
                        <div className='or_sr-cnt'>
                            <h4>Choose Garment</h4>
                            <p>
                                "Smart Choices, Distinct Identity: Elevate
                                your school spirit with our meticulously
                                crafted uniforms, blending style, comfort,
                                and quality for an exceptional academic
                                experience."
                            </p>
                        </div>
                    </div>
                    <div className='or_sr-cd or_sr-cd2'>
                        <div className='or_sr-ovl or_sr-ovl2'></div>
                        <div className='or_sr-cnt'>
                            <h4>Select Size</h4>
                            <p>
                                "Discover the Perfect Fit: School Uniforms
                                Available in a Range of Sizes. Choose
                                Comfort, Style, and Confidence for
                                Every Student."

                            </p>
                        </div>
                    </div>
                    <div className='or_sr-cd or_sr-cd3'>
                        <div className='or_sr-ovl or_sr-ovl3'></div>
                        <div className='or_sr-cnt'>
                            <h4>Order</h4>
                            <p>
                                "Order School Uniforms with Ease. Elevate
                                School Spirit, Quality, and Style. Your
                                One-Stop Shop for Customized School Attire."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices