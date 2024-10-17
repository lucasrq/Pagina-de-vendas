import { styled } from "styled-components";


export const Container = styled.section`
  width: 100%;
   /* Altura automática para se ajustar ao conteúdo */
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
            background-color:#000002c2;
        }
        &:nth-child(2){
            background-color:#012612;
        }
        &:nth-child(3){
            background-color:#000002c2;
        }
        h3{
            text-align:center;
            font-size:36px;
        }
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;    
    padding:0;
    div{
        width:100%;
        background-color:#012612;
        h2{
        font-size:22px;
        padding:20px;
        
    }
    }
   
  .aboutSing{
    display:flex;
    flex-direction:column;
    align-items:center;   
    margin:0 auto;
    gap:0;
    margin-bottom:40px;
    div{
        margin:20px;
        width:270px;
        padding:50px;
        border-radius:29px;
        &:nth-child(1){
            background-color:#000002c2;
        }
        &:nth-child(2){
            background-color:#000002c2;
        }
        &:nth-child(3){
            background-color:#000002c2;
        }
        h3{
            text-align:center;
            font-size:22px;
        }
    }
  }
  }
`;