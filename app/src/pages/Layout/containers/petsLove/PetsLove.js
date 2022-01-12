import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import smallDog from '../../../../static/small-dog.png';
import instagram from '../../../../static/instagram.svg';


import "swiper/css/bundle";

import './PetsLove.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function PetsLove() {

  const slides = [];

  for(let i = 0; i < 3; i++) {
    slides.push(
      <SwiperSlide>
        <div className="wrapper__petsLove-block">
              <div className="wrapper__petsLove-img">
                <img className="wrapper__petsLove-img" src={smallDog} alt="smallDog"></img>
              </div>
              <div className="wrapper__petsLove-comment">
                <div className="wrapper__petsLove-description">
                “Tootsie just received her Mixlab order and she’s so excited for it! Within two hours of ordering it got delivered to the house and its like she knew it was at the door. She absolutely hates taking her medicine but she truly loves her Mixlab box because it’s so informative, quick, easy to order but especially because includes
                 a new toy each time! Thank you Mixlab for always taking care of her! She can’t wait to place her next order now!”
                </div>
                <div className="wrapper__petsLove-location">
                  <img src={instagram} className="location-img"></img>
                  Tootsie, CA
                </div>
              </div>
            </div>
      </SwiperSlide>
    );
  };

  return (
    <div className="wrapper__petsLove">
      <h3 className="title">
        Pets love Mixlab!
      </h3>
      <div className="wrapper__petsLove-title">
        See why we're 5 stars on <span>Yelp</span>, <span>Google</span> and <span>Facebook</span>:)
      </div>
      <React.Fragment>
            <Swiper navigation pagination autoplay={{"delay": 2500}}>
              {slides}
            </Swiper>
      </React.Fragment>
      </div>
  );
}
