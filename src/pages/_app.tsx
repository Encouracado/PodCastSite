import { useState } from "react";

import "../styles/global.scss";
import Header from "../components/Header";
import Player from "../components/Player";

import { Wrapper } from "../styles/app";

import { PlayerContext } from "../contexts/ContextPlayer";

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  function playEpisode(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider
      value={{ episodeList, currentEpisodeIndex, playEpisode }}
    >
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </Wrapper>
    </PlayerContext.Provider>
  );
}

export default MyApp;
