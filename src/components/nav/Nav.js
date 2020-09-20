import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Reddit_Lockup_OnWhite.svg';
import './nav.css';

export default function Nav() {
  return (
    <>
      <header>
        <Link to="/" className="links">
          <img src={Logo} alt={Logo} className="img-logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                to="/how-it-works"
                style={{ textDecoration: 'none' }}
                className="links"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: 'none' }}
                className="links"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
