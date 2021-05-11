import { createContext, useState, ReactNode } from "react";

export type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerData = {
  episodeList: Episode[];
  //como tem botao de voltar e proximo é uma lista de episodios
  currentEpisodeIndex: number;
  isPlaying: boolean; //para o episodio que está tocando
  hasNext: boolean;
  hasPrevious: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  playEpisode: (episode: Episode) => void;
  setPlaying: (state: boolean) => void;
  playList: (episodes: Episode[], index: number) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  clearPLayerState: () => void;
};

export const PlayerContext = createContext({} as PlayerData);

type PlayerContextProviderProps = {
  children: ReactNode;
};

export function PlayerContexProvider({ children }: PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPLaying] = useState(false);
  const [isLooping, setLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  function playEpisode(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPLaying(true);
  }

  function playList(episodes: Episode[], index: number) {
    setEpisodeList(episodes);
    setCurrentEpisodeIndex(index);
    setIsPLaying(true);
  }

  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext = isShuffling || currentEpisodeIndex + 1 >= episodeList.length;

  function playNext() {
    if (isShuffling) {
      const randomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(randomEpisodeIndex);
    } else if (hasNext) {
      return;
    } else {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  function togglePlay() {
    setIsPLaying(!isPlaying);
  }

  function toggleLoop() {
    setLooping(!isLooping);
  }
  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  function setPlaying(state: boolean) {
    setIsPLaying(state);
  }

  function clearPLayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }
  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        playEpisode,
        isPlaying,
        isLooping,
        togglePlay,
        setPlaying,
        playList,
        playNext,
        playPrevious,
        hasNext,
        hasPrevious,
        toggleLoop,
        toggleShuffle,
        isShuffling,
        clearPLayerState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
