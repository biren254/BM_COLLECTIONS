import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {Provider} from 'react-redux';
import store from './redux/store';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-zw5idfxv.us.auth0.com"
    clientId="J7hMLro4i7Qf62DOqWiqYq6AxTzXwT70"
    redirectUri={window.location.origin}>
  <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>,
 
) 
