import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { ImUser } from 'react-icons/im';

export default function Navbar() {
  return (
    <nav>
      <div className="logolinks">
        <p className="logo-text">
          Bookstore CMS
        </p>
        <ul className="links">
          <li><Link to="/" className="link">BOOKS</Link></li>
          <li><Link to="/categories" className="link">CATEGORIES</Link></li>
        </ul>
      </div>
      <div className="user-icon">
        <ImUser class="profile" />
      </div>
    </nav>
  );
}
