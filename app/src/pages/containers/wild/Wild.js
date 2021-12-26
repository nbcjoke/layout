import './Wild.css';

import dogg from '../../../static/dogg.png';
import mix from '../../../static/mix.png';
import wild from '../../../static/wild.png';

export function Wild() {
  return (
    <div className="wrapper__wild">
            <h3 className="wild-title">
              In the Wild
            </h3>
            <div className="wild-description">
              In The Wild is a collection of pieces to help close the communication gap,
               while growing the love (and understanding) between you and your best pal.
            </div>
            <div className="wrapper__wild-block">
            <div className="wrapper__wild-info">
              <div className="wrapper__wild-img">
                <img className="wild-img" src={mix}></img>
              </div>
              <div className="wrapper__wild-information">
              <div className="wrapper__wild-data">
                May 3, 2021
              </div>
              <div className="wrapper__wild-title">
                What is compounding?
              </div>
              <div className="wrapper__wild-description">
                Compounding is the art and science of preparing personalized medications.
              </div>
              <div className="wrapper__wild-read">
                Read the article
              </div>
            </div>
            </div>
            <div className="wrapper__wild-info">
              <div className="wrapper__wild-img">
                <img className="wild-img" src={dogg}></img>
              </div>
              <div className="wrapper__wild-information">
              <div className="wrapper__wild-data">
                June 15, 2021
              </div>
              <div className="wrapper__wild-title">
                Anxiety in Pets
              </div>
              <div className="wrapper__wild-description">
                An interview with a top behavioral specialist in NYC.
              </div>
              <div className="wrapper__wild-read">
                Read the article
              </div>
            </div>
            </div>
          </div>
          <div className="wrapper__wild-button">
          <button className="wild-button">
            View more
          </button>
        </div>
          </div>
  );
}
