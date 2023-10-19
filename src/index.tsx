import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/app/app';
import {PLACES_COUNT} from './common/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={PLACES_COUNT}/>
  </React.StrictMode>
);
