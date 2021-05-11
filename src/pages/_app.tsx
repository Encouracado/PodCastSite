import { useState } from "react";

import "../styles/global.scss";
import Header from "../components/Header";
import Player from "../components/Player";

import { Wrapper } from "../styles/app";

import { PlayerContexProvider } from "../contexts/ContextPlayer";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContexProvider>
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </Wrapper>
    </PlayerContexProvider>
  );
}

export default MyApp;
