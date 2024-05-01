import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Hero from "./Hero";
import LatestProduct from "./LatestProduct";
import AboutUs from "./AboutUs";
import Choose from "./Choose";
import OurServices from "./OurServices";
import OurProducts from "./OurProducts";
import Reviews from "./Reviews";
import TestimonialSlider from "./TestimonialSlider";
import { Route, Routes } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import PrivacyPolicy from "../footer/PrivacyPolicy";
import RefundPolicy from "../footer/RefundPolicy";
import Blog from "../blog/Blog";
// import LottieComponent from '../LottieComponent';

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page__Wrap">
            <Header />
            <Hero />
            <LatestProduct />
            <AboutUs />
            <Choose />
            <OurServices />
            <OurProducts />
            <Reviews />
            <TestimonialSlider />
            <Blog />
            <Footer />
            {/* <LottieComponent></LottieComponent> */}
          </div>
        }
      />

      <Route path="/privacy-policies" element={<PrivacyPolicy />} />
      <Route path="/refund-policies" element={<RefundPolicy />} />
    </Routes>
  );
};

export default Home;
