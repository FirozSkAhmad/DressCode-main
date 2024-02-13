import React, { useRef, useEffect } from 'react';
import "./review.css";

import Fade from 'react-reveal/Fade';

import { useInView } from "framer-motion";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Reviews = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        tl.to(".rv__Ttl-txt span", 1.8, {
            y: 0,
            ease: "power4.out",
            delay: 0.5,
            skewY: 0,

            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".rv__Ttl-txt span",
                start: "top 80%",
                end: "+=300",
                scrub: 1,
                // markers: true,
                once: true
                // pin: true

            }
        })

    }, []);

    return (
        <div className='review__Wrap'>
            <div className='review__Sec'>
                <div className='review__Ttl'>
                    <div className='rv__Ttl-s'>
                        <div className='rv__Ttl-txt'>
                            <span>Our Clients</span>
                        </div>
                        <div className='rv__Ttl-txt'>
                            <span><a className='cl'>&</a> Reviews</span>
                        </div>
                    </div>
                    <div className='rv_ln-wp' ref={ref}>
                        <span className='rv-ln'
                            style={{
                                width: isInView ? "100%" : "64px",
                                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) .5s"
                            }}
                        ></span>
                    </div>
                </div>
                <div className='review_Cmp-Boxes'>
                    <div className='rev_Logo-row'>
                        <div className='rev_logo-col logo_blank'>

                        </div>
                        <div className='rev_logo-col rev_logo-col1'>
                            <span>Logo</span>
                        </div>
                        <div className='rev_logo-col'>

                        </div>
                        <div className='rev_logo-col'>

                        </div>
                    </div>
                    <div className='rev_Logo-row'>
                        <div className='rev_logo-col'>

                        </div>
                        <div className='rev_logo-col'>

                        </div>
                        <div className='rev_logo-col'>

                        </div>
                        <div className='rev_logo-col'>

                        </div>
                    </div>
                    <div className='rev_Logo-row'>
                        <div className='rev_logo-col'>

                        </div>
                        <div className='rev_logo-col'>

                        </div>
                        <div className='rev_logo-col'>

                        </div>
                        <div className='rev_logo-col rev_Cta'>
                            <a href="">and more...!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews