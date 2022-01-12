import './Info.css';

import wrapperinfo from '../../../../static/wrapper-info.png';

export function Info() {
  return (
    <div className="wrapper__info">
        <div className="wrapper__info-title">
            The pet pharmacy humans are jealous of.
        </div>
        <div className="wrapper__info-description">
            5 stars on <span>Yelp</span>, <span>Google</span> and <span>Facebook</span> because your best
            friend deserves only the best in pet care. 
        </div>
        <button className="wrapper__info-button">
            Try Mixlab
        </button>
    </div>
  );
}
