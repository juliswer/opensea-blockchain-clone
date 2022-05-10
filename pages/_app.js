import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

// ? Chain ID 4 === Rinkeby Testing Network
// ? Injected is a connector used by metamask

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
