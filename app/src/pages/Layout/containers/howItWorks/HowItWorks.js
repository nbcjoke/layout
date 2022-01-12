import './HowItWorks.css';

import parrot from '../../../../static/parrot.png';
import rabbit from '../../../../static/rabbit.png';
import dog from '../../../../static/dog.png';

export function HowItWorks() {
  return (
    <div className="wrapper__howItWorks">
            <h3 className="title">
              How it works
            </h3>
            <div className="howItWorks">
              <div className="howItWorks__wrapper">
              <div className="howItWorks-image">
                <img className="howItWorks-img" src={parrot} alt="parrot"></img>
              </div>
              <div className="howItWorks-title">
                We receive your prescription
              </div>
              <div className="howItWorks-description">
                Either your veterinarian sends us a prescription or
                 we reach out to them for you. Whatever is easiest!
              </div>
            </div>
            <div className="howItWorks__wrapper">
              <div className="howItWorks-image">
                <img className="howItWorks-img"src={rabbit} alt="rabbit"></img>
              </div>
              <div className="howItWorks-title">
                We deliver your care package
              </div>
              <div className="howItWorks-description">
                Fast and free next-day delivery, straight to your door. Same-day in NYC and LA.
              </div>
            </div>
            <div className="howItWorks__wrapper">
              <div className="howItWorks-image">
                <img className="howItWorks-img" src={dog} alt="dog"></img>
              </div>
              <div className="howItWorks-title">
                You treat your pet
              </div>
              <div className="howItWorks-description">
                Give your pet the care they need to feel better. Plus they can play with our included toy!
              </div>
            </div>
          </div>
            <button className="wrapper__howItWorks-button">Learn more</button>
          </div>
  );
}
