import React, { useContext, useEffect, useState } from "react";
import "./blog.css";
import { getDocs, collection } from "firebase/firestore";
import sharedContext from "../../context/SharedContext";
import { db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Blog = () => {
  const { blogsData } = useContext(sharedContext);
  const navigate = useNavigate();
  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.to(".ch_Tl-txt span", 1.8, {
      y: 0,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,

      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".ch_Tl-txt span",
        start: "top 80%",
        end: "+=300",
        scrub: 1,
        // markers: true,
        once: true,
        // pin: true
      },
    });
  }, []);

  const handleViewBlog = (data) => {
    // Combine clicked card with the additional four cards
    const dataToSend = {
      clickedCardData: data,
    };

    // Encode the heading to include in the URL
    const postTitleUrl = encodeURIComponent(
      data.heading.replace(/\s+/g, "-").toLowerCase()
    );
    // Navigate to the BlogPost component with the data
    navigate(`/blogPost?title=${postTitleUrl}`, {
      state: { data: dataToSend },
    });
  };

  const limitedBlogsData = blogsData.slice(0, 3); // Adjust accordingly if you want more blogs

  useEffect(() => {
    const adjustHeight = () => {
      const blogTitles = document.querySelectorAll('.blog-title');
      let maxHeight = 0;

      // Find the maximum height
      blogTitles.forEach((blogTitle) => {
        const height = blogTitle.clientHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      // Set all blog titles to the maximum height
      blogTitles.forEach((blogTitle) => {
        blogTitle.style.height = `${maxHeight}px`;
      });
    };

    adjustHeight();
    // Adding an event listener to window resize if you want the adjustment to be responsive
    window.addEventListener('resize', adjustHeight);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', adjustHeight);
  }, [blogsData]); // Dependency array includes blogsData to rerun the effect when it changes


  const ShimmerCard = () => (
    <div className="blog-cards-sec">
      <div className="blog-post">
        <div className="blog-img shimmer"></div>
        <div className="blog-title">
          <p
            className="title shimmer"
            style={{
              height: "20px",
              width: "70%",
              margin: "10px",
              borderRadius: "10px",
            }}
          ></p>
          <p
            className="view shimmer"
            style={{
              height: "20px",
              width: "30%",
              margin: "10px",
              borderRadius: "10px",
            }}
          ></p>
        </div>
      </div>
    </div>
  );

  window.onload = function () {
    const blogTitles = document.querySelectorAll(".blog-title");
    let maxHeight = 0;

    // Find the maximum height
    blogTitles.forEach(function (blogTitle) {
      const height = blogTitle.clientHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    console.log("maxHeight",maxHeight)
    // Set all blog titles to the maximum height
    blogTitles.forEach(function (blogTitle) {
      blogTitle.style.height = maxHeight + "px";
    });
  };

  return (
    <div className="blog-sec">
      <div className="blog-content">
        <div className="blog-content-head">
          <h3>Blog & Media</h3>
          <Link to="/blogs">
            <p>Show All</p>
          </Link>
        </div>
        <div className="blog-grid">
          {blogsData.length === 0
            ? Array.from({ length: 3 }, (_, index) => (
                <Fade bottom duration={1000} delay={index * 200} key={index}>
                  <ShimmerCard />
                </Fade>
              ))
            : limitedBlogsData.map((data, index) => (
                <Fade bottom duration={1000} delay={index * 200} key={data.id}>
                  <div className="blog-cards-sec">
                    <div className="blog-post">
                      <div className="blog-img">
                        <img src={data.img} alt="Blog Image" />
                      </div>
                      <div className="blog-title">
                        <p className="title">{data.heading}</p>
                        <p
                          className="view"
                          onClick={() => handleViewBlog(data)}
                        >
                          View More
                        </p>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
