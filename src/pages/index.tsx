import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { PlayerContext } from "../contexts/ContextPlayer";
import { ThemeContext } from "../contexts/ThemeContext";
import { format, parseISO } from "date-fns";
import { ConvertDurationToTimeString } from "../utils/ConvertDurationToTimeString";
import ptBr from "date-fns/locale/pt-BR";
import api from "../services/api";

import {
  Homepage,
  LatestEpisodes,
  AllEpisodesSection,
  EpisodesDetails,
  PlayButton,
  ImageTable,
  PodcastsTable,
  ThTablePodcasts,
  TdTablePodCasts,
  PlayButtonTable,
  SunIcon,
  ButtonTheme,
} from "./homeStyles";

type Episodes = {
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

type HomeProps = {
  latestEpisodes: Episodes[];
  AllEpisodes: Episodes[];
};

export default function Home({ latestEpisodes, AllEpisodes }: HomeProps) {
  const { playList } = useContext(PlayerContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const episodeList = [...latestEpisodes, ...AllEpisodes];

  return (
    <Homepage>
      <Head>
        <title>Bem Vindo ao PordCastr</title>
      </Head>
      <ButtonTheme
        type="button"
        onClick={() => {
          toggleTheme();
        }}
      >
        <SunIcon />
      </ButtonTheme>

      <LatestEpisodes>
        <h2>Últimos Lançamentos</h2>
        <ul>
          {latestEpisodes.map((episode, index) => {
            return (
              <li key={episode.id}>
                <img src={episode.thumbnail} alt={episode.title} />

                <EpisodesDetails>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </EpisodesDetails>
                <PlayButton
                  type="button"
                  onClick={() => {
                    playList(episodeList, index);
                  }}
                >
                  <img src="/play-green.svg" alt="escutar" />
                </PlayButton>
              </li>
            );
          })}
        </ul>
      </LatestEpisodes>
      <AllEpisodesSection>
        <h2>Todos os episodios</h2>
        <PodcastsTable cellSpacing={0}>
          <thead>
            <tr>
              <ThTablePodcasts></ThTablePodcasts>
              <ThTablePodcasts>Podcasts</ThTablePodcasts>
              <ThTablePodcasts>Integrantes</ThTablePodcasts>
              <ThTablePodcasts>Data</ThTablePodcasts>
              <ThTablePodcasts>Duração</ThTablePodcasts>
              <ThTablePodcasts></ThTablePodcasts>
            </tr>
          </thead>
          <tbody>
            {AllEpisodes.map((episode, index) => {
              return (
                <tr key={episode.id}>
                  <TdTablePodCasts>
                    <ImageTable src={episode.thumbnail} alt={episode.title} />
                  </TdTablePodCasts>
                  <TdTablePodCasts>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </TdTablePodCasts>
                  <TdTablePodCasts>{episode.members}</TdTablePodCasts>
                  <TdTablePodCasts style={{ width: 100 }}>
                    {episode.publishedAt}
                  </TdTablePodCasts>
                  <TdTablePodCasts>{episode.durationAsString}</TdTablePodCasts>
                  <TdTablePodCasts>
                    <PlayButtonTable
                      type="button"
                      onClick={() =>
                        playList(episodeList, index + latestEpisodes.length)
                      }
                    >
                      <img src="/play-green.svg" alt="escutar" />
                    </PlayButtonTable>
                  </TdTablePodCasts>
                </tr>
              );
            })}
          </tbody>
        </PodcastsTable>
      </AllEpisodesSection>
    </Homepage>
  );
}

//getServerSideProps - metodo utilizado quando sua pagina recebe atualizacoes do back end muitas vezes
//getStaticProps - metodo utilizado quando sua pagina nao recebe muitas atualizacoes do back isso evita chamadas
//desnecessarias a api
export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("episodes/", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });
  const data = await response.data;

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
        locale: ptBr,
      }),
      duration: Number(episode.file.duration),
      durationAsString: ConvertDurationToTimeString(
        Number(episode.file.duration)
      ),
      description: episode.description,
      url: episode.file.url,
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const AllEpisodes = episodes.slice(2, episodes.legnth);
  return {
    props: {
      latestEpisodes,
      AllEpisodes,
    },
    revalidate: 60 * 60 * 8, //periodo de 8 horas para atualização
  };
};
