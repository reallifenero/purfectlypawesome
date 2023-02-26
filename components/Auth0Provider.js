import React from "react";
import { useRouter } from "next/router";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  let path;
  let origin;

  const router = useRouter();

  const useWindow = () => {
    if (window !== undefined) {
      path = window.location.pathname;
      origin = window.location.origin;
    }
  };

  const onRedirectCallback = (appState) => {
    router.push(appState?.returnTo || path);
  };

  useWindow();

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
