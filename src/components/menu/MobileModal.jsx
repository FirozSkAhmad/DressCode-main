import React, { useEffect, useState } from "react";
import "./mobileModal.css";
import ContactModal from "../contact/ContactModal";
// import { Link } from "react-router-dom";

const MobileModal = ({ isOpen, onClose }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };
  // useEffect(() => {
  //     const initializeCursor = () => {
  //         const links = document.querySelectorAll('a');
  //         const cursor = document.querySelector('[data-cursor="1"]');

  //         links.forEach(link => {
  //             link.addEventListener('mouseenter', () => {
  //                 cursor.classList.add('cursor-hover--a');
  //             });

  //             link.addEventListener('mouseleave', () => {
  //                 cursor.classList.remove('cursor-hover--a');
  //             });
  //         });
  //     };

  //     initializeCursor();

  //     // Clean up event listeners when the component unmounts
  //     return () => {
  //         const links = document.querySelectorAll('a');

  //         links.forEach(link => {
  //             link.removeEventListener('mouseenter', () => { });
  //             link.removeEventListener('mouseleave', () => { });
  //         });
  //     };
  // }, []);
  return (
    <>
      <div className={`mob-modal ${isOpen ? "open" : ""}`}>
        <div className="mob-modal-content">
          <div className="mob-menu_Md-wrap">
            <div className="mob-mn_Cnt-bx">
              <div className="mob-mn_Main-cnt">
                <div className="mob-mn_Col1">
                  <div className="mob-mn_Ttl-icn">
                    {/* <Link href="/" onClick={onClose}><Image src="/assets/images/menu-logo.svg" alt='project-d' width={400} height={56}></Image></Link> */}
                    <a
                      href="/"
                      className="mob-menu_Modal-logo"
                      onClick={onClose}
                    >
                      <img src="assets/images/logo-menu.png" alt="logo"></img>
                    </a>
                  </div>
                  {/* <div className="mn_Cnt-us">
                                        <a href="" onClick={onClose}>Contact BE <i className="fa-solid fa-arrow-right"></i></a>
                                    </div> */}
                </div>
                <div className="mob-mn_Col2">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/portfolio">Work</a>
                    </li>
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a onClick={openContactModal}>Contact</a>
                    </li>
                  </ul>
                  <div className="mn_Icn-bx">
                    <a href="#" target="_blank" rel="noopener">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <button className="mob-mn_Cl-icn" onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>
      {/* Render ContactModal if isContactModalOpen is true */}

      {isContactModalOpen && (
        <ContactModal onClose={closeContactModal} isOpen={openContactModal} />
      )}
    </>
  );
};

export default MobileModal;
