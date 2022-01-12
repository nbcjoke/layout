import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import { Router } from "./router/routes" 

import App from './App.css'

ReactDOM.render(
  <StrictMode>
    <HashRouter>
    <Router />
    </HashRouter>
  </StrictMode>,
  document.getElementById('root')
);


