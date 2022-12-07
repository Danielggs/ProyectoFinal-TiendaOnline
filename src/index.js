import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from "./Redux/store"
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
<Auth0Provider
      domain="dev-tsvpp07v3bagspkr.us.auth0.com"
      clientId="kg6TwJM3zHLmqsKLgJfmQjEcWxHvH590"
      redirectUri={window.location.origin}
      audience="https://dev-tsvpp07v3bagspkr.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
    <Provider store= {store}>
      <App />
    </Provider>
  </Auth0Provider>

</React.StrictMode>,
  
  document.getElementById('root')
);


reportWebVitals();