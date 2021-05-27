import { useContext } from "react";
import format from "date-fns/format";
import ptBr from "date-fns/locale/pt-BR";
import {
  ContainerHeader,
  Paragraph,
  SunIcon,
  ButtonTheme,
  MoonIcon,
} from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBr,
  });

  return (
    <ContainerHeader>
      {theme === "light" ? (
        <img src="logo.svg" alt="podcast" />
      ) : (
        <span style={{ color: "white" }}>Podcastr</span>
      )}

      <Paragraph>The Best Podcast</Paragraph>

      <ButtonTheme
        type="button"
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </ButtonTheme>

      <span>{currentDate}</span>
    </ContainerHeader>
  );
}
