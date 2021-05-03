import React, { useContext } from "react";

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

const Player: React.FC = () => {
  const { currentEpisodeIndex, episodeList } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];
  console.log(episode);

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
          <span>00:00</span>
          <SliderContainer>
            {episode ? (
              <Slider
                style={{ width: "8rem" }}
                trackStyle={{ background: "#04d361" }}
                railStyle={{ backgroundColor: "#9f75ff" }}
                handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
              />
            ) : (
              <EmptySlider />
            )}
          </SliderContainer>

          <span>00:00</span>
        </Progress>
        <WrapperButton>
          <Button disabled={!episode}>
            <img src="/shuffle.svg" alt="misturar" />
          </Button>
          <Button disabled={!episode}>
            <img src="/play-previous.svg" alt="tocar anterior" />
          </Button>
          <PlayButton disabled={!episode}>
            <img src="/play.svg" alt="play" />
          </PlayButton>
          <Button disabled={!episode}>
            <img src="/play-next.svg" alt="tocar proximo" />
          </Button>
          <Button disabled={!episode}>
            <img src="/repeat.svg" alt="repetir" />
          </Button>
        </WrapperButton>
      </footer>
    </Container>
  );
};

export default Player;
