import React, { useContext, useRef, useEffect, useState } from "react";

import { PlayerContext } from "../../contexts/ContextPlayer";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import {
  Container,
  EmptyPlayer,
  Progress,
  WrapperButton,
  EmptySlider,
  PlayButton,
  SliderContainer,
  Button,
  CurrentEpisode,
} from "./styles";
import { ConvertDurationToTimeString } from "../../utils/ConvertDurationToTimeString";

const Player: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    currentEpisodeIndex,
    episodeList,
    isPlaying,
    togglePlay,
    setPlaying,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    isLooping,
    toggleLoop,
    toggleShuffle,
    isShuffling,
  } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  const [progress, setProgress] = useState(0);

  function setUpProgressListenner() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
    }
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Container>
      <header>
        <img src="/playing.svg" alt="playing now" />
        <strong>Tocando Agora </strong>
      </header>

      {episode ? (
        <CurrentEpisode>
          <img src={episode.thumbnail} />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </CurrentEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Selecione um podcast para ouvir</strong>
        </EmptyPlayer>
      )}

      <footer>
        <Progress>
          <span>{ConvertDurationToTimeString(progress)}</span>
          <SliderContainer>
            {episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                style={{ width: "8rem" }}
                trackStyle={{ background: "#04d361" }}
                railStyle={{ backgroundColor: "#9f75ff" }}
                handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
              />
            ) : (
              <EmptySlider />
            )}
          </SliderContainer>

          <span>{ConvertDurationToTimeString(episode?.duration ?? 0)}</span>
        </Progress>
        {episode && (
          <audio
            src={episode.url}
            autoPlay
            ref={audioRef}
            onEnded={handleEpisodeEnded}
            onPlay={() => setPlaying(true)}
            loop={isLooping}
            onPause={() => {
              setPlaying(false);
            }}
            onLoadedMetadata={setUpProgressListenner}
          />
        )}
        <WrapperButton>
          <Button
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
          >
            <img src="/shuffle.svg" alt="misturar" />
          </Button>
          <Button disabled={!episode || !hasPrevious} onClick={playPrevious}>
            <img src="/play-previous.svg" alt="tocar anterior" />
          </Button>
          <PlayButton disabled={!episode} onClick={togglePlay}>
            {isPlaying ? (
              <img src="/pause.svg" alt="play" />
            ) : (
              <img src="/play.svg" alt="play" />
            )}
          </PlayButton>
          <Button disabled={!episode || hasNext} onClick={playNext}>
            <img src="/play-next.svg" alt="tocar proximo" />
          </Button>
          <Button disabled={!episode} onClick={toggleLoop}>
            <img src="/repeat.svg" alt="repetir" />
          </Button>
        </WrapperButton>
      </footer>
    </Container>
  );
};

export default Player;
