import {createContext} from 'react';

export type Episode = {
    title: string,
    members: string,
    thumbnail: string,
    duration: number,
    url: string,
}

type PlayerData = {
    episodeList: Episode[],
    //como tem botao de voltar e proximo é uma lista de episodios
    currentEpisodeIndex: number,
    isPlaying: boolean; //para o episodio que está tocando
    playEpisode: (episode: Episode) => void;
    togglePlay: () => void;
    setPlaying: (state: boolean) => void;
}

export const PlayerContext = createContext({} as PlayerData);
