import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'flowbite/dist/flowbite.css';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer: rootReducer});
// Code for redux setup learnt from Workshop 2's react-redux-button-counter-2022 repo: https://github.com/danyakarras/react-redux-button-counter-2022

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  </React.StrictMode>
);




