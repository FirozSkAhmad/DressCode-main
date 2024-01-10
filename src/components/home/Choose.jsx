import React from 'react';
import "./choose.css";

import Fade from 'react-reveal/Fade';


const Choose = () => {
    return (
        <div className='choose__Wrap'>
            <div className='choose__Sec'>
                <div className='choose__Ttl'>
                    <Fade top duration={1000}>
                        <h2>
                            Choose you<br></br>Uniform
                        </h2>
                    </Fade>
                    <div className='ch_ln-wp'>
                        <span className='ch_ln'></span>
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