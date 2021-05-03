import format from "date-fns/format";
import ptBr from "date-fns/locale/pt-BR";
import { ContainerHeader, Paragraph } from "./styles";

export default function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBr,
  });

  return (
    <ContainerHeader>
      <img src="logo.svg" alt="podcast" />

      <Paragraph>The Best Podcast</Paragraph>

      <span>{currentDate}</span>
    </ContainerHeader>
  );
}
