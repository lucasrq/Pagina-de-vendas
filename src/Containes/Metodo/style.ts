import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  position:absolute;
  margin: 0 auto; /* Centraliza o container */
  padding: 50px; /* Espaçamento interno em cima e embaixo, e nas laterais */
  .Main{
  display: grid;
  grid-template-columns:  60% 40%;   
  font-size:29px;
  overflow-y:hidden;
  div{
    padding:40px;
    overflow-y:hidden;
  }
  .Right{
    background-color:#000002c2;
    border-radius:35px;
    z-index:0;

  }
  }

  button{
    position: absolute;
    z-index:2;
    right:7%;
    bottom:0;
    padding: 40px; 
    color: white;
    background-color: #0d4a2d;
    border: none;
    z-index: 1; 
    font-weight: bold;
    border-radius: 20px;
    width: 250px; 
    font-size: 24px;

    &:hover {
        background-color: #15673D;
    }
  }
`;
