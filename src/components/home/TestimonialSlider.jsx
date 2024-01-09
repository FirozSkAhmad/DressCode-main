import React, { useEffect, useRef, useState } from 'react';
// import "./casestudy.css";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import "./testimonial.css";

const TestimonialSlider = () => {
    const caseSwiperRef = useRef(null);
    const [slidesQuantity, setSlidesQuantity] = useState(4);

    useEffect(() => {
        const container = caseSwiperRef.current;

        const swiperInstance = new Swiper(container, {
            effect: "fade",
            speed: 500,
            loop: true,
            fadeEffect: { crossFade: true },
            slidesPerView: 1,
            autoplay: {
                disableOnInteraction: false
            },
            // pagination: {
            //     el: container.querySelector('.swiper-pagination'),
            //     clickable: true,
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // on: {
            //     init: function () {
            //         const slides = this.slides;
            //         setSlidesQuantity(slides.length);
            //         updSwiperNumericPagination.call(this);
            //     },
            //     slideChange: function () {
            //         updSwiperNumericPagination.call(this);
            //     },
            // },
        });

        return () => {
            // Clean up Swiper instance if necessary
            swiperInstance.destroy();
        };
    }, []);

    // const updSwiperNumericPagination = () => {
    //     if (caseSwiperRef.current) {
    //         const swiperInstance = caseSwiperRef.current.swiper;
    //         const counterElement = swiperInstance.el.querySelector('.swiper-counter');
    //         if (counterElement) {
    //             counterElement.innerHTML = `<span class="count">${swiperInstance.realIndex + 1}</span>/<span class="total">${slidesQuantity}</span>`;
    //         }
    //     }
    // };



    return (
        <div className='testimonial_Wrap'>
            <div className='testimonial__Sec'>
                <div className='test_col1'>
                    <div className='test_dsn-div'>
                        <div className='test_bl'>

                        </div>
                        <div className='sl_btn'>
                            <div class="swiper-button-prev">
                                <img src="assets/images/sl-right.png" alt="right" />
                            </div>
                            <div class="swiper-button-next">
                                <img src="assets/images/sl-left.png" alt="left" />
                            </div>
                        </div>
                    </div>
                    <div className='testimonial__Slide-wrap'>
                        <div className='testimonial-inner'>
                            <div class="swiper-container" ref={caseSwiperRef}>
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div className='test_sl-content'>
                                            <div className='test_up-wrap'>
                                                <div className='test_sl-img'>
                                                    <img src="assets/images/avtar.png" alt="avtar" />
                                                </div>
                                                <div className='test_sl-name'>
                                                    <span>Yasin1</span>
                                                </div>
                                            </div>
                                            <div className='test_tl-ttl'>
                                                <p>Good quality and seamless Exchange</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div className='test_sl-content'>
                                            <div className='test_up-wrap'>
                                                <div className='test_sl-img'>
                                                    <img src="assets/images/avtar.png" alt="avtar" />
                                                </div>
                                                <div className='test_sl-name'>
                                                    <span>Yasin2</span>
                                                </div>
                                            </div>
                                            <div className='test_tl-ttl'>
                                                <p>Good quality and seamless Exchange</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div className='test_sl-content'>
                                            <div className='test_up-wrap'>
                                                <div className='test_sl-img'>
                                                    <img src="assets/images/avtar.png" alt="avtar" />
                                                </div>
                                                <div className='test_sl-name'>
                                                    <span>Yasin3</span>
                                                </div>
                                            </div>
                                            <div className='test_tl-ttl'>
                                                <p>Good quality and seamless Exchange</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div className='test_sl-content'>
                                            <div className='test_up-wrap'>
                                                <div className='test_sl-img'>
                                                    <img src="assets/images/avtar.png" alt="avtar" />
                                                </div>
                                                <div className='test_sl-name'>
                                                    <span>Yasin4</span>
                                                </div>
                                            </div>
                                            <div className='test_tl-ttl'>
                                                <p>Good quality and seamless Exchange</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='test_col2'>
                    <div className='test_ttl-div'>
                        <h4>
                            SINCE 2022<br></br>
                            WE HAVE<br></br>
                            PARTNERED<br></br>
                            WITH MORE<br></br>
                            THAN 20<br></br>
                            SCHOOLS.
                        </h4>
                    </div>
                    <div className='quote_test'>
                        <span>
                            “
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider