import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './pages/components/header';
import {Footer} from './pages/components/footer';
import {Info} from './pages/containers/info';
import {InfoSupport} from './pages/containers/infoSupport';
import {HowItWorks} from './pages/containers/howItWorks';
import {Support} from './pages/containers/support';
import {PetsLove} from './pages/containers/petsLove';
import {Wild} from './pages/containers/wild';

import App from './App.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Info />
    <InfoSupport />
    <HowItWorks />
    <Support />
    <PetsLove />
    <Wild />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

