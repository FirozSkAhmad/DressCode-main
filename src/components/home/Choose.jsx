import React, { useRef } from 'react';
import "./choose.css";

import Fade from 'react-reveal/Fade';

import { useInView } from "framer-motion";




const Choose = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className='choose__Wrap'>
            <div className='choose__Sec'>
                <div className='choose__Ttl'>
                    <Fade top duration={1000}>
                        <h2>
                            Choose your<br></br>Uniform
                        </h2>
                    </Fade>
                    <div className='ch_ln-wp' ref={ref}>
                        <span className='ch_ln'
                            style={{
                                width: isInView ? "100%" : "64px",
                                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) .5s"
                            }}
                        ></span>
                    </div>
                </div>
                <div className='choose__Card'>
                    <div className='ch_Crd'>
                        <div className='ch_bx-cnt'>
                            <h4>Uniforms</h4>
                        </div>
                        <div className='ch_bx-img'>
                            <img src="assets/images/uniform.png" alt="uniform" />
                        </div>
                    </div>
                    <div className='ch_Crd'>
                        <div className='ch_bx-cnt'>
                            <h4>School Shoes</h4>
                        </div>
                        <div className='ch_bx-img'>
                            <img src="assets/images/shoes.png" alt="shoes" />
                        </div>
                    </div>
                    <div className='ch_Crd'>
                        <div className='ch_bx-cnt'>
                            <h4>School Socks</h4>
                        </div>
                        <div className='ch_bx-img'>
                            <img src="assets/images/socks.png" alt="socks" />
                        </div>
                    </div>
                    <div className='ch_Crd'>
                        <div className='ch_bx-cnt'>
                            <h4>Medical Wear</h4>
                        </div>
                        <div className='ch_bx-img'>
                            <img src="assets/images/socks.png" alt="medical wear" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose