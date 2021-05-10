import { useState } from "react";

import "../styles/global.scss";
import Header from "../components/Header";
import Player from "../components/Player";

import { Wrapper } from "../styles/app";

import { PlayerContext } from "../contexts/ContextPlayer";

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPLaying] = useState(false);

  function playEpisode(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPLaying(true);
  }

  function togglePlay() {
    setIsPLaying(!isPlaying);
  }

  function setPlaying(state: boolean) {
    setIsPLaying(state);
  }
  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        playEpisode,
        isPlaying,
        togglePlay,
        setPlaying,
      }}
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
