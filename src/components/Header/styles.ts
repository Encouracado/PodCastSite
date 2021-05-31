import styled, {css} from 'styled-components';
import {HiSun} from 'react-icons/hi'
import {RiMoonClearLine} from 'react-icons/ri';

export const ContainerHeader = styled.header`
   background: var(--gray-50);
    height: 2rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;
    border-bottom: 1px solid var(--gray-100);

    >span{
        //joga o conteúdo do span para o lado direito da tela
        margin-left: auto;
        //transforma a primeira letra de cada palavra em caixa alta
        text-transform: capitalize;

    }
`;

export const Paragraph = styled.p`
  
  margin-left: 2rem;
  padding: 0.25rem 0 0.25rem 2rem;
  border-left: 1px solid var(--gray);
  

`;

const IconCssSun = css`

width:2.85rem;
height: 2.85rem;


background: none;
color: #d8e342;

margin-left: 21rem;

`;

const IconCssMoon = css`

width:2rem;
height: 2rem;


background: none;
color: #d8e342;

margin-left: 26rem;

`;

export const SunIcon = styled(HiSun)`${IconCssSun}
`;
export const MoonIcon = styled(RiMoonClearLine)`${IconCssMoon}`;

export const ButtonTheme = styled.button`
border:none;
background:  none;

`;



