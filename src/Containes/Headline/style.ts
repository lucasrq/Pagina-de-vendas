import styled,  { keyframes } from 'styled-components';
const moveLeftRight = keyframes`
0% {
  
  opacity:0.2;
}
50%{
    opacity:0.2;
}
100%{
    opacity:0.2;
}

`;
export const Container = styled.section`
  width: 100%; /* Altura automática para se ajustar ao conteúdo */
  margin: 0 auto; /* Centraliza o container */
  padding: 50px; /* Espaçamento interno em cima e embaixo, e nas laterais */
  display:flex;
  flex-direction:column;
`;

export const BodyHeadline = styled.div`
z-index:2;
height:100%;
width:100%;
display:flex;
justify-content:center;
margin-bottom:20px;
    .HeadlineTitle{
        background-color:#000002c2;
        font-size:32px;
        padding:46px 25px;
        border-radius:40px;
        min-width:100px;
        max-width: 1090px;
        
        span{
            color:#167d57;
            font-weight:800;
        }
    }


`;

export const ImgHeadline = styled.div`
    z-index:2;
    margin-left:50px;
    height:100%;
    display:flex;
    justify-content:center;
    gap:10%;
    .Top{
        background-color:#000002c2;
        border-radius:40px;
        z-index:1;
        width:40%;
        border-radius:40px;
        h2{
            color:#fff;
            text-align:center;
            
        }
        
    }
    .Bottom{
        border:1px solid #053A1E;
        background-color:#000002c2;
        width:40%;
        z-index:1;
        border-radius:40px;
        h2{
            color:#fff;
            text-align:center;
        }
      
       
    }
`

export const Quadrado1 = styled.div`
  width: 300px;
  height: 200px;
  background-color: #000002c2; /* Cor com opacidade */
  border-radius: 35px;
  position: absolute;
  left: 0;
  top: -60px;
  z-index: 0;
  animation: ${moveLeftRight} 5s infinite ease-in-out; /* Animação */
`;

// Quadrado 2
export const Quadrado2 = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(4, 46, 26, 0.8); /* Cor com opacidade */
  border-radius: 35px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  animation: ${moveLeftRight} 5s infinite ease-in-out; /* Animação */
`;

// Quadrado 3
export const Quadrado3 = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(9, 64, 37, 0.8); /* Cor com opacidade */
  position: absolute;
  border-radius: 35px;
  right: 0;
  top: -60px;
  z-index: 1;
  animation: ${moveLeftRight} 5s infinite ease-in-out; /* Animação */
`;

// Quadrado 4
export const Quadrado4 = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(4, 46, 26, 0.8); /* Cor com opacidade */
  position: absolute;
  border-radius: 35px;
  bottom: 0;
  right: 0;
  z-index: 1;
  animation: ${moveLeftRight} 5s infinite ease-in-out; /* Animação */
`;

// Quadrado 5
export const Quadrado5 = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(4, 46, 26, 0.8); /* Cor com opacidade */
  border-radius: 35px;
  position: absolute;
  left: 50%;
  top: 10px;
  z-index: 1;
  animation: ${moveLeftRight} 5s infinite ease-in-out; /* Animação */
`;

