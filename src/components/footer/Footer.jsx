import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <div className='footer__Wrap'>
            <div className='footer_Sec'>
                <div className='footer__Ttl'>
                    <h2>
                        LET’S TALK
                    </h2>
                </div>
                <div className='ft_nv-top'>
                    <ul>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">Visit Store</a>
                        </li>
                    </ul>
                </div>
                <div className='ft_scl'>
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
                    <img src="assets/images/ft-arrow.png" alt="ft-arrow" />
                </div>
                <div className='ft_circle'>
                    <img src="assets/images/ft-cle.png" alt="ft-cle" />
                </div>
            </div>
        </div>
    )
}

export default Footer