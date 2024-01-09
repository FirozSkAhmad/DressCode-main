import React from 'react';
import "./review.css";

import Fade from 'react-reveal/Fade';


const Reviews = () => {
    return (
        <div className='review__Wrap'>
            <div className='review__Sec'>
                <div className='review__Ttl'>
                    <Fade bottom duration={1000}>
                        <h2>
                            Our Clients<br></br>
                            <span>&</span> Reviews
                        </h2>
                    </Fade>
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