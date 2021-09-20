import React from 'react';
import ReactDOM from 'react-dom';
import Application from './pages/home/index';
import { inDev } from './utils/helpers';

import 'bootstrap/dist/css/bootstrap.min.css';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = <Application />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
