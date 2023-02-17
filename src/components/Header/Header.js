import './Header.css';
import '../App/App.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="navbar__link">
            <img className="navbar__logo" src={logo} alt="Логотип"></img>
          </Link>
          <ul className="navbar__nav">
            <li className="navbar__item">
              <Link to="/" className="navbar__link">
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/" className="navbar__link">
                About Us
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/" className="navbar__link">
                Blog
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/" className="navbar__link">
                Contact
              </Link>
            </li>
          </ul>
          <div class="other-option">
            <Link to="/" class="default-btn">
              Get In Touch
              <span></span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
