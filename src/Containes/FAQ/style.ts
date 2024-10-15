import { styled } from "styled-components";


export const Container = styled.section`
  width: 89%;
  margin: 0 auto; 
  padding: 50px; 
  text-align:center;
  display:flex;
  flex-direction:column;
  h1{
    font-size:42px;
  }
  h2{
    color:#24a667;
    font-size:32px;
  }

  .FAQ{
    display:grid;
    grid-template-columns:1fr 1fr;
    margin-top:30px;
    gap:20px;
    .Perguntas{
      div{
      display:flex;
      flex-direction:column;
      background-color:#0d4a2d;
      padding:20px 50px;
      border-radius:15px;
      button{
        margin-top:20px;
        margin-bottom:20px;
        padding:20px;
        border:none;
        background-color:#24a667;
        border-radius:15px;
        font-size:20px;
        cursor: pointer;
        &:hover{
          background-color:#24a667c2;
        }
      }
      }
    }

    .Respostas{
      background-color:#ccc;
      border-radius:15px;
      p{
        color:#000;
        font-size:37px;
        align-items:center;
        text-align:center;
        display:flex;
        justify-content:center;
        width:100%;
        padding:50px 30px;
      }
    }
  }
`