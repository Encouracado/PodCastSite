import styled from 'styled-components';

export const Container = styled.div`
  max-width:45rem;
  padding: 3rem 2rem;
  margin: 0 auto;
  
  
`;

export const ThumbnailContainer = styled.div`

position: relative;

>img{
    border-radius: 1rem;
    width: 34rem;
    height: 18rem;
    margin-left:6rem;
}




`;
export const ButtonBack = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    position: absolute;
    z-index:5;
    font-size:0;

    transition: filter 0.2;

    margin-left:4.5rem;

    background: var(--purple-500);

    left:0;
    top:40%; 

    &:hover{
      filter: brightness(0.9);
    }
`;
export const PlayButton = styled.button`

    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    position: absolute;
    z-index:5;
    font-size:0;

    margin-right: 3.5rem;
    margin-bottom: 2rem;

    transition: filter 0.2;

    right:0;
    top:40%;

    background: var(--green-500);

    
    
    &:hover{
      filter: brightness(0.9);
    }

`;
export const HeaderEpisodeDetails = styled.header`
 
 padding-bottom: 1rem;
 border-bottom: 1px solid var(--gray);

 h1{
     margin-top: 2rem;
     margin-bottom: 1.5rem;
 }

 span{
     display: inline-block;
     font-size:0.75rem;

     & + span {
         margin-left: 1rem;
         padding-left: 1rem;
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
export const EpisodeDescription = styled.div`

margin-top: 2rem;
line-height: 1.675rem;
color: var(--gray-800);

p{
    margin: 1.5rem;
    text-align: justify;
}

`;