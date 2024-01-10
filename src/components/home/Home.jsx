import React, { useEffect } from 'react';
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

import Lenis from '@studio-freight/lenis'


// import LottieComponent from '../LottieComponent';

const Home = () => {
    useEffect(() => {
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
            // console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

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