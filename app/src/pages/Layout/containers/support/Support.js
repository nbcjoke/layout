import './Support.css';

import support from '../../../../static/support.png';

export function Support() {
  return (
    <div className="wrapper__support">
            <div className="wrapper__support-img">
              <img src={support} alt="support" className="support-image"></img>
            </div>
            <div className="wrapper__support-info">
              <h3 className="h3">
                For Veterinarians
              </h3>
              <div className="support-title">
                We're here to support you and your practice
              </div>
              <div className="support-description">
                Mixlab offers a simple, fast, reliable (and fun) home delivery pharmacy service for your clients. No more delays, no more miscommunications, no more grumpy pets.
                 It’s time to partner with a pharmacy that cares about customer experience as much as you do.
              </div>
              <button className="support-button">
                Learn more
              </button>
            </div>
          </div>
  );
}
