import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.styl';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-buttons_navigation">
        <Link className="nav-link" to="/"><li>Home</li></Link>
        <Link className="nav-link" to="/Browse"><li>Find Art</li></Link>
        <li>About Us</li>
      </ul>
      <div className="nav-buttons_authentication">
        <button className="btn-secondary" type="button">Sign in</button>
        <button className="btn-primary" type="button">Sign up</button>
      </div>
    </nav>
  );
}

export default NavBar;