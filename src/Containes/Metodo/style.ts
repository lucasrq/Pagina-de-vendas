import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  position:relative;
  margin: 0 auto; 
  padding: 50px; 
  
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

  @media (max-width: 480px) {
  width: 100%;
  margin: 0 auto; 
  padding:0; 
  overflow-x:hidden;
  h3{
    font-size:20px;
  }
  .Main{
  display: flex;
  flex-direction:column;
  font-size:20px;
  overflow-y:hidden;
  gap:20px;
  div{
    overflow-y:hidden;
  }
  .Right{
    background-color:#000002c2;
    border-radius:35px;
    z-index:0;
    width:90%;
    margin:0 auto;
    height:350px;
  }
  }
 
  button{
    z-index:2;
    padding: 20px; 
    color: white;
    background-color: #0d4a2d;
    border: none;
    z-index: 1; 
    font-weight: bold;
    border-radius: 14px;
    width: 276px; 
    margin-left:220px;
    font-size: 24px;
    &:hover {
        background-color: #15673D;
    }
  }
  }
`;
