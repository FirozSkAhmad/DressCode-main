import React, { useRef, useEffect } from 'react';
import "./ourproducts.css";

import Fade from 'react-reveal/Fade';
import { useInView } from "framer-motion";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OurProducts = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl.to(".or__Pr-ttl span", 1.8, {
            y: 0,
            ease: "power4.out",
            delay: 0.5,
            skewY: 0,
            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".or__Pr-ttl span",
                start: "top 80%",
                end: "+=300",
                scrub: 1,
                // markers: true,
                once: true
                // pin: true
            }
        })
    }, []);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl.to(".int__Ttl-txt span", 1.8, {
            y: 0,
            ease: "power4.out",
            delay: 0.5,
            skewY: 0,
            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".int__Ttl-txt span",
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
        <div className='ourProduct__Wrap'>
            <div className='ourProduct__Sec'>
                <div className='ourProduct_Ttl'>
                    <div className='or__Pr-ttl'>
                        <span>Our Products</span>
                    </div>
                </div>
                <div className='our_products' ref={ref}>
                    <div className='or_prd-row or_prd-row1'
                        style={{
                            transform: isInView ? "rotate(-6deg)" : "none",
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <div className='or_prd-col'>
                            <div className='or_prd-img'>
                                <img src="assets/images/shirt.png" alt="shirt" />
                            </div>
                            <div className='or_prd-cnt'>
                                <h3>School Shirts</h3>
                                <div className='hl'></div>
                                <p>
                                    a large selection of school uniforms
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='or_prd-row or_prd-row2'
                        style={{
                            transform: isInView ? "rotate(6deg)" : "none",
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <div className='or_prd-col'>
                            <div className='or_prd-cnt'>
                                <h3>Trousers</h3>
                                <div className='hl'></div>
                                <p>
                                    excellent comfort and fit for all ages
                                </p>
                            </div>
                            <div className='or_prd-img'>
                                <img src="assets/images/trouser.png" alt="trouser" />
                            </div>
                        </div>
                    </div>
                    <div className='or_prd-row or_prd-row3'
                        style={{
                            transform: isInView ? "rotate(-6deg)" : "none",
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <div className='or_prd-col'>
                            <div className='or_prd-cnt'>
                                <h3>School Shoes</h3>
                                <div className='hl'></div>
                                <p>
                                    athletic and footwear for school
                                </p>
                            </div>
                            <div className='or_prd-img'>
                                <img src="assets/images/school-shoe.png" alt="school-shoe" />
                            </div>
                        </div>
                    </div>
                    <div className='or_prd-row or_prd-row4'
                        style={{
                            transform: isInView ? "rotate(6deg)" : "none",
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <div className='or_prd-col'>
                            <div className='or_prd-img'>
                                <img src="assets/images/school-socks.png" alt="school socks" />
                            </div>
                            <div className='or_prd-cnt'>
                                <h3>School Socks</h3>
                                <div className='hl'></div>
                                <p>
                                    comfy and soft socks
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='interested__Sec'>
                <div className='intr__Ttl'>
                    <div className='in__Ttl'>
                        <div className='int__Ttl-txt'>
                            <span>Interested?</span>
                        </div>
                    </div>
                    <p>
                        Elevate your uniform experience with us,
                        where quality and style unite seamlessly.
                        Explore our store today and find the
                        perfect fit for your unique needs.
                    </p>
                </div>
                <div className='intr__Str'>
                    <div className='intr_str-cle'>
                        <img src="assets/images/str_cle.png" alt="star" />
                    </div>
                    <a href="">Visit Store</a>
                </div>
            </div>
        </div>
    )
}

export default OurProducts