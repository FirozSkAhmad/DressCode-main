import React, { useState } from 'react';
import "./style.css";
import MenuModal from '../menu/MenuModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // setModalContent(content);
    // document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // if (!isModalOpen) {
    //     document.body.style.overflow = 'auto';
    // }
    // else if (isMobileMenuOpen && isModalOpen) {
    //     document.body.style.overflow = 'hidden';
    // }
    // else {
    //     document.body.style.overflow = 'auto';
    // }
    // setModalContent(null);
  };


  return (
    <>
      <div className='header__Wrap'>
        <div className='header_Sec'>
          <div className='logo'>
            <a href=""><img src='assets/images/logo.png' alt='logo'></img></a>
          </div>
          <div className='navbar'>
            <nav>
              <ul>
                <li>
                  <a href="">shop</a>
                </li>
                <li>
                  <a href="">collections</a>
                </li>
                <li>
                  <a href="">history</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='right_Side'>
            <div className='nav_Social'>
              <a href=''>in</a>
            </div>
            <div className='menu_bar' onClick={openModal}>
              <img src="assets/images/bar.png" alt="menu bar" />
            </div>
          </div>
        </div>
      </div>
      <MenuModal isOpen={isModalOpen} onClose={closeModal}></MenuModal>
    </>

  )
}

export default Header