import React from 'react';
import "./style.css";

const Header = () => {
  return (
    <div className='header__Wrap'>
      <div className='header_Sec'>
        <div className='logo'>
          <img src='assets/images/logo.png' alt='logo'></img>
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
          <div className='menu_bar'>
            <img src="assets/images/bar.png" alt="menu bar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header