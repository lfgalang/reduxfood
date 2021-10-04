import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import Store from './redux/Store';


ReactDOM.render(
  <React.StrictMode>
    {/* Para hacerle saber a react que hay un store se usa el provider */}
    <Provider store={Store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


