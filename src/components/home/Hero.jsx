import React, { useEffect } from "react";
import "./hero.css";

import Fade from "react-reveal/Fade";
// import src from "../../../public/assets/js/background.js"

const Hero = () => {
  // useEffect(() => {
  //     // Your script code goes here
  //     const script = document.createElement('script');
  //     script.src = src;
  //     script.async = true;
  //     document.body.appendChild(script);

  //     // Clean up the script when the component unmounts
  //     return () => {
  //         document.body.removeChild(script);
  //     };
  // }, [])

  useEffect(() => {
    const MIN_SPEED = 0.5; //previously 2.5
    const MAX_SPEED = 1.5; //previously 3.5

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    class Blob {
      constructor(el) {
        this.el = el;
        const boundingRect = this.el.getBoundingClientRect();
        this.size = boundingRect.width;
        this.initialX = randomNumber(0, window.innerWidth - this.size);
        this.initialY = randomNumber(0, window.innerHeight - this.size);
        this.el.style.top = `${this.initialY}px`;
        this.el.style.left = `${this.initialX}px`;
        this.vx =
          randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
        this.vy =
          randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
        this.x = this.initialX;
        this.y = this.initialY;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x >= window.innerWidth - this.size) {
          this.x = window.innerWidth - this.size;
          this.vx *= -1;
        }
        if (this.y >= window.innerHeight - this.size) {
          this.y = window.innerHeight - this.size;
          this.vy *= -1;
        }
        if (this.x <= 0) {
          this.x = 0;
          this.vx *= -1;
        }
        if (this.y <= 0) {
          this.y = 0;
          this.vy *= -1;
        }
      }

      move() {
        this.el.style.transform = `translate(${this.x - this.initialX}px, ${
          this.y - this.initialY
        }px)`;
      }
    }

    function initBlobs() {
      const blobEls = document.querySelectorAll(".bouncing-blob");
      const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

      function update() {
        requestAnimationFrame(update);
        blobs.forEach((blob) => {
          blob.update();
          blob.move();
        });
      }

      requestAnimationFrame(update);
    }

    initBlobs();
  }, []);






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

      <div className="hero__Wrap">
        <div className="hero__Sec">
          <div className="hero__Ttl">
            <Fade bottom delay={1000} duration={1000}>
              <h1>
                the<br></br>
                future of<br></br>
                uniform<br></br>
                shopping<br></br>
              </h1>
            </Fade>
          </div>
          <div className="sub_Hero">
            <div className="hero__Para">
              <Fade bottom delay={2000} duration={1000}>
                <p>
                  The Uniform must last. We help you<br></br>
                  choose the fabric from one of the<br></br>
                  leading garment manufacturers of<br></br>
                  India like Benny, Sairam, Reliance, ...
                </p>
              </Fade>
              {/* <Fade bottom delay={1000} duration={1000}></Fade> */}
            </div>
            <div className="hero__Cta">
              <div className="hr_arw">
                <Fade bottom delay={2000} duration={1000}>
                  <img src="assets/images/arrow-down.png" alt="arrow down" />
                </Fade>
              </div>
              <div className="shop_Now-txt">
                <Fade bottom delay={2000} duration={1000}>
                  <span>Shop Now</span>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
