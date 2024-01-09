import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

import Hero from './Hero';
import LatestProduct from './LatestProduct';
import AboutUs from './AboutUs';
import Choose from './Choose';
import OurServices from './OurServices';
import OurProducts from './OurProducts';
import Reviews from './Reviews';
import TestimonialSlider from './TestimonialSlider';


// import LottieComponent from '../LottieComponent';

const Home = () => {
    return (
        <div className='page__Wrap'>
            <Header></Header>
            <Hero></Hero>
            <LatestProduct></LatestProduct>
            <AboutUs></AboutUs>
            <Choose></Choose>
            <OurServices></OurServices>
            <OurProducts></OurProducts>
            <Reviews></Reviews>
            <TestimonialSlider></TestimonialSlider>
            <Footer></Footer>
            {/* <LottieComponent></LottieComponent> */}
        </div>
    )
}

export default Home