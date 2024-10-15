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
`