import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [openMeny, SetOpenMenu] = useState<boolean>(false);

  return (
    <header>
      <nav>
        <p className="logo">
          CII<span className="logo-s">S</span>
        </p>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>

        {/* <div className="dropdown">
          <button className="dropbtn">EN</button>
          <div className="dropdown-content">
            <a>PT</a>
          </div>
        </div> */}
      </nav>
    </header>
  );
}
