import './App.css';

// import logo from './static/logo.svg';

function App() {
  return (
    <div className="wrapper">
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
      <footer className="footer">
        <div className="footer__info">
          <div className="wrapper-image">
            <img className="image" src="static/alliance.png" alt=""></img>
          </div>
          <div className="wrapper-image">
            <img className="image" src="static/" alt=""></img>
          </div>
          <div className="wrapper-image">
            <img className="image" src="static/" alt=""></img>
          </div>
          <div className="wrapper-image">
            <img className="image" src="static/" alt=""></img>
          </div>
          <div className="wrapper-image">
            <img className="image" src="static/" alt=""></img>
          </div>
        </div>
        <div className="footer__content"></div>
      </footer>
    </div>
  );
}

export default App;
