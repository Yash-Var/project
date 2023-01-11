import React from "react";
import ReactDOM from "react-dom/client";
import Auth from "./components/Auth";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-1qqk5qy3hxszpdo5.us.auth0.com"
    clientId="N0kHYp2TwD1ULmceBjqNxAX87sdiiR9m"
    redirectUri={window.location.origin}
  >
    <Auth />
  </Auth0Provider>
);
