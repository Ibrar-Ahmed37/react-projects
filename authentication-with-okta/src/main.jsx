import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const clientId = import.meta.env.VITE_CLIENT_ID;
const domain = import.meta.env.VITE_DOMAIN;
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain='dev-7y73fn3mlzdr0cko.us.auth0.com'
    clientId= 'vVOSbxMBTzixJ4LVzm3VZF20Bmez6ijS'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
