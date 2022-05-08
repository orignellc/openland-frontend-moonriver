import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import Layout from "../components/HOC/Layout/Layout";
import { AuthProvider } from "../context/Context";
import Backdrop from "../components/ui/Backdrop/Backdrop";
import { useState } from "react";
import PropertyUploadSuccessModal from "../components/PropertyUploadSuccessModal/PropertyUploadSuccessModal";
import UploadedProperties from "../components/UploadedProperties/UploadedProperties";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";

function MyApp({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any) => {
    const library = new Web3Provider(provider, "any");
  };

  const [show, setShow] = useState(false)

  return (
    <AuthProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Backdrop showBackdrop={show}>
            <PropertyDetails />
          </Backdrop>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </AuthProvider>
  );
}

export default MyApp;
