import React, { useEffect } from 'react';
import "./hero.css";


const Hero = () => {

    useEffect(() => {
        // Your script code goes here
        const script = document.createElement('script');
        script.src = '../../../public/assets/js/background.js';
        script.async = true;
        document.body.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, [])

    return (

        <>

            <div className="bouncing-blobs-container">
                <div className="bouncing-blobs-glass"></div>
                <div className="bouncing-blobs">
                    <div className="bouncing-blob bouncing-blob--purple"></div>
                    <div className="bouncing-blob bouncing-blob--blue"></div>
                    {/* <div className="bouncing-blob bouncing-blob--blue"></div> */}
                    {/* <div className="bouncing-blob bouncing-blob--blue"></div> */}
                    {/* <div className="bouncing-blob bouncing-blob--white"></div> */}
                    {/* <div className="bouncing-blob bouncing-blob--purple"></div> */}
                    {/* <div className="bouncing-blob bouncing-blob--pink"></div> */}
                </div>
            </div>

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

        </>
    )
}

export default Hero