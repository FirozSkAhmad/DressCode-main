import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

import Hero from './Hero';
import LatestProduct from './LatestProduct';

const Home = () => {
    return (
        <div className='page__Wrap'>
            <Header></Header>
            <Hero></Hero>
            <LatestProduct></LatestProduct>
        </div>
    )
}

export default Home