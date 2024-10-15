import { styled } from "styled-components";


export const Container = styled.section`
  width: 100%;
  height: 100vh; /* Altura automática para se ajustar ao conteúdo */
  margin: 0 auto; /* Centraliza o container */
  padding: 50px; /* Espaçamento interno em cima e embaixo, e nas laterais */
  display: flex;
  flex-direction:column;
  align-items:center;   
  .aboutSing{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:80px;
    
    div{
        margin-top:40px;
        width:400px;
        margin-right:25px;
        margin-left:25px;
        padding:50px;
        border-radius:29px;
        &:nth-child(1){
            background-color:#094025;
        }
        &:nth-child(2){
            background-color:#032e18;
        }
        &:nth-child(3){
            background-color:#094025;
        }
        h3{
            text-align:center;
            font-size:36px;
        }
    }
  }
`;