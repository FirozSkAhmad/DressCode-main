import React, { useRef } from 'react';
import "./footer.css";

import Fade from 'react-reveal/Fade';

import { useInView } from "framer-motion";

{/* <Fade bottom delay={1000} duration={1000}></Fade> */ }

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='footer__Wrap'>
            <div className='footer_Sec'>
                <div className='footer__Ttl'>
                    <Fade bottom delay={500} duration={500}>
                        <h2>
                            LET’S TALK
                        </h2>
                    </Fade>
                </div>
                <div className='ft_nv-top'>
                    <ul>
                        <Fade bottom delay={1000} duration={500}>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </Fade>
                        <Fade bottom delay={1500} duration={500}>
                            <li>
                                <a href="">Visit Store</a>
                            </li>
                        </Fade>
                    </ul>
                </div>
                <div className='ft_ln_wp' ref={ref}>
                    <ul>
                        <li
                            style={{
                                width: isInView ? "25%" : "0",
                                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                            }}
                        ></li>
                        <li
                            style={{
                                width: isInView ? "25%" : "0",
                                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                            }}
                        ></li>
                        <li
                            style={{
                                width: isInView ? "25%" : "0",
                                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                            }}
                        ></li>
                        <li
                            style={{
                                width: isInView ? "25%" : "0",
                                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                            }}
                        ></li>
                    </ul>
                </div>
                <div className='ft_scl'>
                    <Fade bottom delay={1000} duration={1000}>
                        <ul>
                            <li>
                                <a href="">
                                    <span>
                                        facebook
                                    </span>
                                    <img src='assets/images/fb.png' alt='fb'></img>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>
                                        Instagram
                                    </span>
                                    <img src='assets/images/insta.png' alt='insta'></img>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>
                                        Linkedin
                                    </span>
                                    <img src='assets/images/in.png' alt='in'></img>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>
                                        Twitter
                                    </span>
                                    <img src='assets/images/twt.png' alt='twt'></img>
                                </a>
                            </li>
                        </ul>
                    </Fade>

                </div>
                <div className='ft_nv-btm'>
                    <div className='copy-right'>
                        <span>
                            @ 2024 Copy rights
                        </span>
                    </div>
                    <div className='nv_rgt'>
                        <a href="">Cookie policy</a>
                        <a href="">Privacy policy</a>
                        <a href="">Terms of Use</a>
                    </div>
                </div>
                <div className='ft-arrow'>
                    <Fade top duration={500}>
                        <img src="assets/images/ft-arrow.png" alt="ft-arrow" />
                    </Fade>
                </div>
                <div className='ft_circle'>
                    <Fade bottom delay={1000} duration={500}>
                        <img src="assets/images/ft-cle.png" alt="ft-cle" />
                    </Fade>
                </div>
            </div>
        </div >
    )
}

export default Footer