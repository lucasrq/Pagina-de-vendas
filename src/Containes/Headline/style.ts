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
  @media (max-width: 480px) {
  width: 100%; /* Altura automática para se ajustar ao conteúdo */
  margin: 0 auto; /* Centraliza o container */
  }
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

    @media (max-width: 480px) {
      z-index:2;
      width:100%;
    .HeadlineTitle{
        background-color:#000002c2;
        font-size:14px;
        border-radius:20px;
        span{
            color:#167d57;
        }
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
        background-color:#000002c2;
        width:40%;
        z-index:1;
        border-radius:40px;
        h2{
            color:#fff;
            text-align:center;
        }
    }

    @media (max-width: 480px) {
    z-index:2;
    overflow-x:hidden;
    width:100%;
    display:flex;
    margin:0 auto;
    flex-direction:column;

    .Top{
        background-color:#000002c2;
        border-radius:40px;
        z-index:1;
        width:100%;
        height:100%;
        border-radius:19px;
        margin-bottom:20px;
        h2{
          font-size:20px;
            color:#fff;
            text-align:center;
        }
        
    }
    .Bottom{
        background-color:#000002c2;
        border-radius:40px;
        z-index:1;
        width:100%;
        border-radius:19px;
        h2{
            font-size:20px;
            color:#fff;
            text-align:center;
        }
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
  overflow-Y:hidden;
  animation: ${moveLeftRight} 5s infinite ease-in-out; /* Animação */
  @media (max-width: 480px) {
    display:none;
  }
`;

// Quadrado 2
export const Quadrado2 = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(4, 46, 26, 0.8); /* Cor com opacidade */
  border-radius: 35px;
  position: absolute;
  left: 0;
  overflow-Y:hidden;
  bottom: 0;
  z-index: 1;
  animation: ${moveLeftRight} 5s infinite ease-in-out;
  @media (max-width: 480px) {
    display:none;
  }
`;

// Quadrado 3
export const Quadrado3 = styled.div`
  width: 300px;
  overflow-Y:hidden;
  height: 300px;
  background-color: rgba(9, 64, 37, 0.8); /* Cor com opacidade */
  position: absolute;
  border-radius: 35px;
  right: 0;
  top: -60px;
  z-index: 1;
  animation: ${moveLeftRight} 5s infinite ease-in-out; 
  @media (max-width: 480px) {
    display:none;
  }
`;

// Quadrado 4
export const Quadrado4 = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(4, 46, 26, 0.8); /* Cor com opacidade */
  position: absolute;
  border-radius: 35px;
  overflow-Y:hidden;
  bottom: 0;
  right: 0;
  z-index: 1;
  animation: ${moveLeftRight} 5s infinite ease-in-out; 
  @media (max-width: 480px) {
    display:none;
  }
`;

// Quadrado 5
export const Quadrado5 = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(4, 46, 26, 0.8); /* Cor com opacidade */
  border-radius: 35px;
  position: absolute;
  overflow-Y:hidden;
  left: 50%;
  top: 10px;
  z-index: 1;
  animation: ${moveLeftRight} 5s infinite ease-in-out;
  @media (max-width: 480px) {
    display:none;
  }
`;

