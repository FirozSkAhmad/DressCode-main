import React, { useContext, useEffect } from "react";
import "../components/blog/blog.css";
import Header from "../components/header/Header";
import BackArrow from "/assets/images/backArrow.svg";
import sharedContext from "../context/SharedContext";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";

const BlogPage = () => {
  const { blogsData } = useContext(sharedContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // Add useEffect hook to scroll to the top of the page when location state changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  return (
    <>
      <Header />
      <div className="blog-sec">
        <div className="back" onClick={goBack}>
          <img src={BackArrow} alt="Back Arrow" style={{ cursor: "pointer" }} />
          <p>Back</p>
        </div>
        <div className="blogs-grid">
          {blogsData.map((data, index) => (
            <div className="blog-cards-sec" key={data.id}>
              <div className="blog-post">
                <div className="blog-img">
                  <img src={data?.img} alt="Blog Image" />
                </div>
                <div className="blog-title">
                  <p className="title">{data?.heading}</p>
                  <p className="view" onClick={() => handleViewBlog(data)}>
                    View More
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
