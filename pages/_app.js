import "../styles/index.scss";
import Auth0ProviderWithHistory from "../components/Auth0Provider";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0ProviderWithHistory>
      <Component {...pageProps} />
    </Auth0ProviderWithHistory>
  );
}

export default MyApp;
