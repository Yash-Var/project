import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import env from "react-dotenv";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={env.DOMAIN}
    clientId={env.CLIENTID}
    redirectUri={window.location.origin}
    audience={env.AUDIENCE}
    scope={env.SCOPE}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


