import styled from 'styled-components';

export const Container = styled.section`
  width: 100%; 
  margin: 0 auto; 
  padding: 50px; 
  display: flex;
  flex-direction:column;
  align-items:center;  
  .Depoimentos{
    display:flex;
    justify-content:space-between;
    gap:50px;
    img{
        margin-top:50px;
        width:100%;
        max-width:300px;
        border-radius:20px;
    }
  }

  @media (max-width: 480px) {
  margin-top: 40px; 
  margin-bottom:40px;
  padding: 0;
  width:100%;
  overflow-x:hidden;
    h2{
      font-size:20px;
      width:40px;
      color: #fff;
      width:100%;
    }
  .Depoimentos{
    display:flex;
    flex-direction:column;
    align-items:center;  
    gap:4px;
    img{
        margin-top:50px;
        width:100%;
        border-radius:20px;
    }
  }   
  }
`