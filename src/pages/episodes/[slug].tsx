import React, { useContext } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import api from "../../services/api";
import ptBr from "date-fns/locale/pt-BR";
import { format, parseISO } from "date-fns";
import { ConvertDurationToTimeString } from "../../utils/ConvertDurationToTimeString";

import {
  Container,
  ThumbnailContainer,
  ButtonBack,
  PlayButton,
  HeaderEpisodeDetails,
  EpisodeDescription,
} from "./styles";
import { PlayerContext } from "../../contexts/ContextPlayer";

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  duration: number;
  durationAsString: string;
  description: string;
  url: string;
};

type EpisodeProps = {
  episode: Episode;
};

export default function Episode({ episode }: EpisodeProps) {
  const { playEpisode } = useContext(PlayerContext);
  return (
    <Container>
      <Head>
        <title>{episode.title} || Podcastr</title>
      </Head>
      <ThumbnailContainer>
        <Link href={"/"}>
          <ButtonBack type="button">
            <img src="/arrow-left.svg" alt="Voltar" />
          </ButtonBack>
        </Link>
        <img src={episode.thumbnail} />
        <PlayButton onClick={() => playEpisode(episode)}>
          <img src="/play.svg" alt="tocar" />
        </PlayButton>
      </ThumbnailContainer>

      <HeaderEpisodeDetails>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </HeaderEpisodeDetails>

      <EpisodeDescription
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], //quando o path esta vazio, no momento do build nenhuma
    //pagina do tipo [slug].tsx foi gerada estaticamente
    //voce pode informar um objeto para que seja gerada uma pagina estatica { params: { }}
    fallback: "blocking",
    // falback false - se a pagina nao foi gerada estaticamente a pagina retorna 404 pois nao foi encontrado
    // fallback true - a chamada api é feita pelo lado do cliente/browser
    // fallback blocking - a requisição é feita na camada no next.js/servidor node do next
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { data } = await api.get(`episodes/${slug}`);
  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBr,
    }),
    duration: Number(data.file.duration),
    durationAsString: ConvertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url,
  };

  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24, // 24horas
  };
};
