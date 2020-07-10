import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HarperDBProvider } from 'use-harperdb';

ReactDOM.render(
  <React.StrictMode>
    <HarperDBProvider url="http://localhost:9925" user="HDB_ADMIN" password="password">
      <App />
    </HarperDBProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
