import "../styles/globals.css";
import React from "react";

import { Layout } from "../components";
import { StateContext } from "../context/StateContext"; //import context API
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    //wrape layout with context
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
