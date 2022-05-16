import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import Layout from "../components/HOC/Layout/Layout";
import { AuthProvider } from "../context/Context";
import Backdrop from "../components/ui/Backdrop/Backdrop";
import { useEffect, useState } from "react";
import connectedNetworkCheck from "../utils/connectedNetworkCheck";

function MyApp({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any) => {
    const library = new Web3Provider(provider, "any");
  };

  const [show, setShow] = useState(true)

  // @ts-ignore
  if (typeof window !== "undefined") window.ethereum.on('networkChanged', async () => await connectedNetworkCheck());
  useEffect(() => {
  }, [])

  return (
    <AuthProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </AuthProvider>
  );
}

export default MyApp;
