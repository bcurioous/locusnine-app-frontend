import React from 'react';
// import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';

function Header() {
  return (
    <nav className="navbar is-white">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item brand-text" href="../index.html">
            Locusnine
          </a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="admin.html">
              Home
            </a>
            <a className="navbar-item" href="admin.html">
              Users
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
