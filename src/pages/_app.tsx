import "../styles/global.scss";
import Header from "../components/Header";
import Player from "../components/Player";

import { Wrapper } from "../styles/app";

import { PlayerContexProvider } from "../contexts/ContextPlayer";
import { ThemeContextProvider } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContexProvider>
      <ThemeContextProvider>
        <Wrapper>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </Wrapper>
      </ThemeContextProvider>
    </PlayerContexProvider>
  );
}

export default MyApp;
