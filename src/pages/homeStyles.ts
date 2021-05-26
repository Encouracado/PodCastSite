import styled, {css} from 'styled-components';
import {HiSun} from 'react-icons/hi'
 
export const Homepage = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  >h2{
      margin-top:3rem;
      margin-bottom: 1.5rem;
  }
`;

export const LatestEpisodes = styled.section`

>h2{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
>ul{
    
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    >li{
       background: var(--white);
       border: 1px solid var(--gray-100);
       padding: 1rem;
       border-radius: 1.5rem;
       margin-top: 1rem;
       position: relative;

       display: flex;
       align-items: center;

       >img{
         width: 5rem;
         height: 4rem;
         border-radius: 1rem;
       }

      
    }
}

`;


export const EpisodesDetails = styled.div`

  flex: 1;
  margin-left: 1rem;

  >a{
    display: block;
    color: var(--gray-800);
    font-family: sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height:1.4rem;
    font-size: 0.80rem;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover{
      text-decoration: underline;
    }
 }
 >p{
      font-size: 0.65rem;
      margin-top: 0.5rem;
      max-width:50%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  >span{
    display: inline-block;
    margin-top:0.35rem;
    font-size: 0.65rem;

    &:last-child{
      margin-left: 0.45rem;
      padding-left: 0.45rem;
      position: relative;

      &::before{
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #DDD;
        position: absolute;
        left: 0;
        top:50%;
        transform: translate(-50%, -50%);

      }
    }
  }

`;
export const PlayButton = styled.button`

  flex: 1;
  margin-left: 1rem;

  position:absolute;
  right: 2rem;
  bottom: 2rem;

  width: 2rem;
  height: 2rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 0.675rem;
  font-size:0;
  transition: filter 0.2s;
  >img{
    width: 1.5rem;
    height:1.5rem;
  }

  &:hover{
    filter: brightness(0.95);
  }

`;
export const PlayButtonTable = styled.button`

  width: 1.8rem;
  height: 1.8rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 0.6rem;
  font-size:0;
  transition: filter 0.2s;
  >img{
    width: 1.25rem;
    height:1.25rem;
  }

  &:hover{
    filter: brightness(0.95);
  }

   
`;

export const AllEpisodesSection = styled.section`

padding-bottom: 2rem;

>h2{
  margin-top: 1rem;
  margin-bottom: 1rem;
}

`;

export const PodcastsTable = styled.table`

width:100%;
  
`;

export const ThTablePodcasts = styled.th`
    padding: 0.75rem 1rem;
 
    color: var(--gray-200);
     text-transform: uppercase;
     font: 500 0.75rem sans-serif;
     text-align: left;

`;
export const TdTablePodCasts = styled.td`
     padding: 0.75rem 1 rem;
     border-top: 1px solid var(--gray-100);
     padding: 0.75rem 1rem;
     font-size: 0.75rem;
  >a{
    color: var(--gray-800);
    font-family: sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height:1.4rem;
    font-size: 0.85rem;

    &:hover{
      text-decoration: underline;
    }
  }

`;


export const ImageTable = styled.img`

         width: 3rem;
         height: 2rem;
         border-radius: 1rem;

`;


const IconCss = css`

width:2rem;
height: 2rem;


background: white;
color: yellow;



`;

export const SunIcon = styled(HiSun)`${IconCss}
`;

export const ButtonTheme = styled.button`
border:none;
background:  none;

`;
