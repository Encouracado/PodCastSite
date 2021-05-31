import styled from 'styled-components';

export const Container = styled.div`
  width:12.5rem;
  padding: 2rem 4rem;
  height: 90.8vh;

  overflow-y: hidden;
  
  background: var(--purple-500);
  color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;

  >header{
      display: flex;
      align-items: center;
      gap: 1rem;
  }
  >strong{
      font-family: Lexend, sans-serif;
      font-weight:600;
  }
  >footer{
    align-self: stretch;

    &:empty{
      //VOCE PRECISA ARRUMAR ESTA CLASE, ELA NAO ESTA FUNCIONANDO
      opacity:0.6;
    }
  }
`;

export const CurrentEpisode = styled.div`

text-align: center;

>img{
  width: 13.5rem;
  height: 20rem;
  border-radius: 1.5rem;

  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

>strong{
  display:block;
  font: 600 0.85rem sans-serif;
  line-height:1.45rem;
}
>span{
  display:block;
  font-size: 0.65rem;
  opacity:0.6;
  margin-bottom:1rem;
}
`;

export const EmptyPlayer = styled.div`
  width: 65%;
  height: 10rem;
  min-width:65%;
  min-height:9rem;

  border: 0.25rem dashed var(--purple-300);
  border-radius: 1.5rem;
  background: linear-gradient(143.8deg, rgba(145,100,250, 0.8) 0%, rgba(0,0,0,0) 100%);

  padding: 4rem;
  text-align: center;

  margin-top: 7rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Progress = styled.div`
 
 display: flex;
 align-items: center;
 gap:0.5rem;
 font-size:0.875rem;
 justify-content: center;



 span{
   
   display: inline-block;
   width: 4rem;
   text-align: center;
   //&:last-child{
   // retirado o margin right para centralizar o player
   //}
 }

`;
export const EmptySlider = styled.div`

 width: 8rem;
 height: 4px;
 background: var(--purple-300);
 border-radius: 2px;

`;

export const SliderContainer = styled.div`

flex: 1;


`;
export const WrapperButton = styled.div`

display: flex;
align-items: center;
justify-content: space-between;


`;
export const Button = styled.button`

display: flex;
align-items: center;
justify-content: center;
margin-top: 2.5rem;
gap: 1.5rem;
background: transparent;
border:0;
font-size:0;
transition: filter 0.2s;

&:disabled{
  cursor:not-allowed;
  opacity: 0.5;
}

&:hover:not(:disabled){
  filter: brightness(0.80);
}

`;
export const PlayButton =  styled.button`
display: flex;
align-items: center;
justify-content: center;
margin-top: 2.5rem;
gap: 1.5rem;
background: transparent;
border:0;
font-size:0;
width: 3rem;
height:3rem;
border-radius:1rem;
background: var(--purple-400);

transition: filter 0.2s;

&:hover{
  filter: brightness(0.90);
}

&:disabled{
  cursor:not-allowed;
  opacity:0.5;
}

`;


