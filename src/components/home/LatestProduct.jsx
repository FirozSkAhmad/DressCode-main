import React, { useRef } from 'react';
import "./latestProduct.css";

import Fade from 'react-reveal/Fade';

import { useInView } from "framer-motion";

const LatestProduct = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });




    return (
        <div className='latestProduct__Wrap'>
            <div className='lt_Pr-sec' >
                <div className='lt_pt-Ttl'>
                    <h2>
                        Latest<br></br>Products
                    </h2>
                    <div className='lt_pt-line' ref={ref}>
                        <span className='lt_ln'
                            style={{
                                width: isInView ? "100%" : "64px",
                                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                            }}
                        ></span>
                    </div>
                </div>
                <div className='lt_Btm-row'>
                    <div className='lt_para'>
                        <h3>A Brand is Born</h3>
                        <p>
                            We are delighted to announce the<br></br>
                            launch of our new brand StuX. to<br></br>
                            underscore our commitment to<br></br>
                            transformation and your<br></br>
                            evolving expectations.
                        </p>
                    </div>
                    <div className='lt_Content'>
                        <div className='lt_pr-Crl lt_pr-Crl1'>
                            <Fade right duration={1000}>
                                <img src='assets/images/lt-pr1.png' alt='product'></img>
                            </Fade>
                        </div>
                        <div className='lt_pr-Crl lt_pr-Crl2'>
                            <Fade right delay={500} duration={1000}>
                                <img src='assets/images/lt-pr2.png' alt='product'></img>
                            </Fade>
                        </div>
                        <Fade right delay={1000} duration={1000}>
                            <div className='lt_pr-halfCrl'>
                                {/* <Fade delay={1000} duration={1000}> */}
                                <a href=''>See All</a>
                                {/* </Fade> */}
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProduct;