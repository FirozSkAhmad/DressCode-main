import React, { useEffect } from "react";
import "../components/blog/blog.css";
import BackArrow from "/assets/images/backArrow.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const BlogPost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clickedCardData } = location.state.data;

  // Add useEffect hook to scroll to the top of the page when location state changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const goBack = () => {
    navigate(-1);
  };

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    return `${month} / ${day}`;
  };

  // Split the bodyText into an array of paragraphs
  const tipsArray = clickedCardData?.bodyText
    .split(/\d+.\s/)
    .filter((tip) => tip.trim() !== "");

  return (
    <>
      <Header />
      <div className="back" onClick={goBack}>
        <img src={BackArrow} alt="Back Arrow" style={{ cursor: "pointer" }} />
        <p>Back</p>
      </div>
      <div className="post-det">
        <div className="post-sec">
          <div className="post-head">
            <h2>{clickedCardData?.heading}</h2>
          </div>
          <div className="post-img">
            <img src={clickedCardData?.img} alt="" />
          </div>
          <div className="post-content-area">
            <div className="post-date">
              <p>{formatDate(clickedCardData?.uploadDate)}</p>
              <span className="author">By Dresscode</span>
            </div>
            <div className="post-content">
              <p>
                {tipsArray.map((tip, index) => (
                  <p key={index} style={{ marginTop: "20px" }}>
                    {tip}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
