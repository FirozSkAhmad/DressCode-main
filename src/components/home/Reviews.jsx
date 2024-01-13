import React, { useRef } from 'react';
import "./review.css";

import Fade from 'react-reveal/Fade';

import { useInView } from "framer-motion";


const Reviews = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='review__Wrap'>
            <div className='review__Sec'>
                <div className='review__Ttl'>
                    <Fade top duration={1000}>
                        <h2>
                            Our Clients<br></br>
                            <span>&</span> Reviews
                        </h2>
                    </Fade>
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