import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <img src="https://image.magicbricks.com/static/mb_header_logo.png" alt="magicbricks" />
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#buy" className="active">Buy</a></li>
            <li><a href="#rent">Rent</a></li>
            <li><a href="#sell">Sell</a></li>
            <li><a href="#tools">Tools & Advice</a></li>
            <li><a href="#whats-new">What's New</a></li>
            <li><a href="#home-loans">Home Loans</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </nav>
        <div className="user-actions">
          <a href="#activity">My Activity</a>
          <button className="post-property-btn">Post Property <span>Free</span></button>
        </div>
      </div>
    </header>
  );
};

export default Header;