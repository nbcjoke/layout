import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/routes" 

import App from './App.css'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);


