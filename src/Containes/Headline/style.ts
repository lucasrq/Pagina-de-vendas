import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh; /* Altura automática para se ajustar ao conteúdo */
  margin: 0 auto; /* Centraliza o container */
  padding: 50px; /* Espaçamento interno em cima e embaixo, e nas laterais */
  display: grid;
  grid-template-columns:  60% 40%;
  gap: 20px; /* Espaçamento entre as colunas */
`;

export const BodyHeadline = styled.div`
position:relative;
z-index:2;
height:100%;
    .HeadlineTitle{
        background-color:#0d4a2d;
        font-size:42px;
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
    .Top{
        h2{
            color:#000;
            text-align:center;
        }
        
    }
    .Bottom{
        h2{
            color:#000;
            text-align:center;
        }
      
       
    }
`

export const Quadrado1 = styled.div`
        width:300px;
        height:200px;
        background-color:#042e1a;
        border-radius:35px;
        position:absolute;
        left:0;
        top:-60px;
        z-index:1;
`

export const Quadrado2 = styled.div`
        width:300px;
        height:300px;
        background-color:#094025;
        border-radius:35px;
        position:absolute;
        left:0;
        bottom:0;
        z-index:1;
`
export const Quadrado3 = styled.div`
        width:300px;
        height:300px;
        background-color:#0d4a2d;
        position:absolute;
        border-radius:35px;
        right:0;
        top:-60px;
        z-index:1;
`
export const Quadrado4 = styled.div`
        width:300px;
        height:300px;
        background-color:#042e1a;
        position:absolute;
        border-radius:35px;
        bottom:0;
        right:0;
        z-index:1;
`

export const Quadrado5 = styled.div`
        width:300px;
        height:300px;
        background-color:#042e1a;
        border-radius:35px;
        position:absolute;
        left:50%;
        top:50%;
        z-index:1;
`