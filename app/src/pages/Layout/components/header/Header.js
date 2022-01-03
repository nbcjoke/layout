import './Header.css';

import logo from '../../../../static/logo.svg';

export function Header() {
  return (
    <header>
          <div className="header__inner">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">Veterinarians</a>
                </li> 
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">How it works</a>
                </li> 
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">About us</a>
                </li> 
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">Blog</a>
                </li> 
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">Shop</a>
                </li>
              </ul>
            </nav>
            <a className="logo" href="#">
            <img src={logo} alt="logo"></img>
            </a>
            <div className="login">
                  <a className="login-link" href="#">Veterinarian login</a>
            </div>
            <button className="header__btn">
              Try Mixlab
            </button>
          </div>
        </header>
  );
}
