import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { MoralisProvider } from "react-moralis";
import { Moralis } from "moralis";
import { useContext, useEffect, useState } from "react";

import Layout from "../components/HOC/Layout/Layout";
import { AuthContext, AuthProvider } from "../context/Context";
import Backdrop from "../components/ui/Backdrop/Backdrop";
import connectedNetworkCheck from "../utils/connectedNetworkCheck";
import Alert from "../components/ui/Alert/Alert";
import AlertModel from "../models/AlertModel";

function MyApp({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any) => {
    const library = new Web3Provider(provider, "any");
  };

  const [show, setShow] = useState(true)
  const [showAlert, setShowAlert] = useState<AlertModel>({ message: "", show: false, timer: 0, variant: "danger" })

  if (typeof window !== "undefined") {
    window.ethereum.on('disconnect', () => {
      localStorage.removeItem("openland-user")
      window.location.reload()
    });

    window.ethereum.on('networkChanged', async () => {
      // localStorage.removeItem("openland-user")
      // setShowAlert({ message: "Please connect to MoonRiver network", show: true, timer: 20000, variant: "danger" })
      await connectedNetworkCheck()
      // window.location.reload()
    });
  }

  return (
    <AuthProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Alert showAlert={showAlert} setShowAlert={setShowAlert} />
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </AuthProvider>
  );
}

export default MyApp;
