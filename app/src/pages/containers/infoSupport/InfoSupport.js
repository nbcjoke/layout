import './InfoSupport.css';

import dolmatinets from '../../../static/dolmatinets.png';

export function InfoSupport() {
  return (
    <div className="info__support">
            <div className="info__support-block">
              <p>
                We couldn’t find a pharmacy experience worthy of our best buds— so we created one.
              </p>
              <div className="info__support-image">
                <img className="info__support-img" src={dolmatinets} alt="dolmatinets"></img>
              </div>
            </div>
            <div className="info__support-block2">
            <div className="info__support-title">
              Patients first, always
            </div>
            <div className="info__support-decription">
              We know how stressful it can be when your pet needs meds. That’s why we offer free next-day 
              delivery and even do same-day in NYC and LA. We got you.
            </div>
            <div className="info__support-title">
              Tailored care
            </div>
            <div className="info__support-decription">
              We’ll work with you and your veterinarian to find the very best solution for your pet. With our custom compounded options, we can change the dosage, flavor and form.
              We even have a flavor guarantee with over 40 options!
            </div>
            <div className="info__support-title">
              Support, 7 days a week
            </div>
            <div className="info__support-decription">
              You’re not alone. Text, call, or email us 7 days a week—we’ll answer and do our best to sprinkle in a bit of sunshine. ☀️
            </div>
          </div>
          </div>
  );
}
