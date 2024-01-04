import React from 'react';
import "./hero.css";

const Hero = () => {
    return (
        <div className='hero__Wrap'>
            <div className='hero__Sec'>
                <div className='hero__Ttl'>
                    <h1>
                        the<br></br>
                        future of<br></br>
                        uniform<br></br>
                        shopping<br></br>
                    </h1>
                </div>
                <div className='sub_Hero'>
                    <div className='hero__Para'>
                        <p>
                            The Uniform must last. We help you<br></br>
                            choose the fabric from one of the<br></br>
                            leading garment manufacturers of<br></br>
                            India like Benny, Sairam, Reliance, ...
                        </p>
                    </div>
                    <div className='hero__Cta'>
                        <div className='hr_arw'>
                            <img src="assets/images/arrow-down.png" alt="arrow down" />
                        </div>
                        <div className='shop_Now-txt'>
                            <span>Shop Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero