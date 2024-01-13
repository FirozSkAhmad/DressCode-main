import React, { useEffect } from "react";
import "./menuModal.css";

// import { Link } from "react-router-dom";



const MenuModal = ({ isOpen, onClose }) => {

    // useEffect(() => {
    //     const cursor = document.querySelector('[data-cursor="1"]');

    //     // Define mouse event handler functions
    //     const handleMouseEnter = () => {
    //         if (cursor) {
    //             cursor.classList.add('cursor-hover--a');
    //             console.log('MenuModal Mouse entered - cursor class added');
    //         }
    //     };

    //     const handleMouseLeave = () => {
    //         if (cursor) {
    //             cursor.classList.remove('cursor-hover--a');
    //             console.log('MenuModal Mouse left - cursor class removed');
    //         }
    //     };

    //     const links = document.querySelectorAll('a');

    //     links.forEach(link => {
    //         link.addEventListener('mouseenter', handleMouseEnter);
    //         link.addEventListener('mouseleave', handleMouseLeave);
    //     });

    //     console.log('MenuModal Event listeners added');

    //     // Clean up event listeners when the component unmounts
    //     return () => {
    //         links.forEach(link => {
    //             link.removeEventListener('mouseenter', handleMouseEnter);
    //             link.removeEventListener('mouseleave', handleMouseLeave);
    //         });

    //         console.log('MenuModal Event listeners removed');
    //     };
    // }, []);    

    return (
        <>
            <div className={`modal ${isOpen ? "open" : ""}`}>
                <div className="modal-content">
                    <div className="menu_Md-wrap">
                        <div className="mn_Cnt-bx">
                            <div className="mn_Main-cnt">
                                <div className="mn_Col1">
                                    <div className="mn_Ttl-icn">

                                        {/* <Link href="/" onClick={onClose}><Image src="/assets/images/menu-logo.svg" alt='project-d' width={400} height={56}></Image></Link> */}
                                        <a href="/" className="menu_Modal-logo" onClick={onClose}>
                                            <img src="assets/images/logo-menu.png" alt="logo"></img>
                                        </a>
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
                                    <div className="mn_Cnt-us">
                                        <a href="">Contact<i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                                <div className="mn_Col2">
                                    <ul>
                                        <li>
                                            <a href="">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Shop
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Collection
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                History
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="mn_Cl-icn" onClick={onClose}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={onClose}></div>
        </>
    );
};

export default MenuModal;
