import './Footer.css';

import alliance from '../../../static/alliance.png';
import aca from '../../../static/aca.png';
import corporate from '../../../static/corporate.png';
import pcca from '../../../static/pcca.png';
import mixlab from '../../../static/mixlab.png';
import insta from '../../../static/insta.svg';
import facebook from '../../../static/facebook.svg';
import twitter from '../../../static/twitter.svg';
import xz from '../../../static/xz.svg';
import google from '../../../static/google.svg';

export function Footer() {
  return (
    <footer className="footer">
          <div className="footer__info">
            <div className="wrapper-image">
              <img className="image" src={alliance} alt=""></img>
            </div>
            <div className="wrapper-image">
            <img className="image" src={aca} alt=""></img>
            </div>  
            <div className="wrapper-image">
              <img className="image" src={corporate} alt=""></img>
            </div>
            <div className="wrapper-image">
              <img className="image" src={pcca} alt=""></img>
            </div>
            <div className="wrapper-image">
              <img className="image" src={mixlab} alt=""></img>
            </div>
          </div>
          <div className="footer__content">
            <div className="content-block">
            <div className="footer__content-links">
               <div className="footer__content-title">
                Quick Links
               </div>
               <a href="" className="a">Veterinarians</a>
               <a href="" className="a">Products</a>
               <a href="" className="a">How it Works</a>
               <a href="" className="a">About us</a>
               <a href="" className="a">Blog</a>
               <a href="" className="a">Shop</a>
               <a href="" className="a">Careers</a>
               <a href="" className="a">Veterinarian login</a>
               <a href="" className="a">Contact us</a>
            </div>
            <div className="footer__content-message">
              <div className="footer__content-title">
                Call or Text
              </div>
              <a href="" className="a">(888) 901-4480</a>
              <div className="footer__content-email">
                Email
              </div>
              <a href="" className="a">hello@mixlabrx.com</a>
              <div className="footer__content-fax">
                Fax
              </div>
              <a href="" className="a">(212) 967-0892</a>
            </div>
            <div className="footer__content-location">
              <div className="footer__content-title">
                New York City
              </div>
              <p>
                336 West 37th St
                Suite 850
                New York, NY 10018
              </p>
              <p>
                Mon-Sat 10am - 8pm ET
                Sun 10am - 2pm ET
              </p>
            </div>
            <div className="footer__content-location">
              <div className="footer__content-title">
                Los Angeles
              </div>
              <p>
                2223 Federal Ave
                Los Angeles, CA 90064
              </p>
              <p>
                Mon-Sat 9am - 7pm PT
                Sun 9am - 1pm PT
              </p>
            </div>
            <div className="footer__content-social"> 
              <div className="footer__content-title">
                Social
              </div>
              <img src={insta} alt="" className="footer__content-img"></img>
              <img src={facebook} alt="" className="footer__content-img"></img>
              <img src={twitter} alt="" className="footer__content-img"></img>
              <img src={xz} alt="" className="footer__content-img"></img>
              <img src={google} alt="" className="footer__content-img"></img>
            </div>
          </div>
            <div className="footer__content-block">
              <div className="footer__content-year">
                2021 Mixlab, Inc.
              </div>
              <div className="footer__content-privacy">
                Privacy Policy
              </div>
              <div className="footer__content-terms">
                Terms of Service
              </div>
            </div>
          </div>
        </footer>
  );
}
