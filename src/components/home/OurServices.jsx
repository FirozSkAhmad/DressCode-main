import React, { useRef } from 'react';
import "./ourservices.css";

import Fade from 'react-reveal/Fade';

import { useInView } from "framer-motion";



const OurServices = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
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
                <div className='or_Ser-card' ref={ref}>
                    <div className='or_sr-cd or_sr-cd1'>
                        <div className='or_sr-ovl or_sr-ovl1'
                            style={{
                                transform: isInView ? "translateY(0%)" : "translateY(-100%)",
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}

                        ></div>
                        <div className='or_sr-cnt'
                            style={{
                                opacity: isInView ? "1" : "0",
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                            }}
                        >
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
                        <div className='or_sr-ovl or_sr-ovl2'
                            style={{
                                transform: isInView ? "translateY(0%)" : "translateY(100%)",
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        ></div>
                        <div className='or_sr-cnt'
                            style={{
                                opacity: isInView ? "1" : "0",
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                            }}
                        >
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
                        <div className='or_sr-ovl or_sr-ovl3'
                            style={{
                                transform: isInView ? "translateY(0%)" : "translateY(-100%)",
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        ></div>
                        <div className='or_sr-cnt'
                            style={{
                                opacity: isInView ? "1" : "0",
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                            }}
                        >
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