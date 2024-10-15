import { styled } from "styled-components";


export const Container = styled.section`
  width: 65%;
  margin: 0 auto; 
  margin-top: 50px;  
  display:grid;
  grid-template-columns:70% 30%;
  
  .left{
    border-radius:30px;
    background-color:#042e1a;
    padding:30px;
    align-items:center;
    text-align:left;
    margin-right:20px;
    h3{
    font-size:28px;
    text-align:left;
  }
  span{
    color: #167d57;
  }
  p{
    margin-top:20px;
    font-size:18px;
  }
  }

  .right{
    padding:30px;
    border-radius:30px;
    background-color:#0d4a2d;
    align-items:center;
    text-align:center;


    h1{
        font-size:35px;
    }

    h4{
        font-size:19px;
        font-weight:normal;
    }

    h2{
      color:#24a667;
      font-size:45px;
    }

    h3{
      font-size:19px;
      cursor: pointer;
      u{
        &:hover{
        color:#24a667c2;
      }
      }
    }

    button{
      border-radius:10px;
      border:none;
      width:90%;
      background-color:#24a667;
      padding:20px;
      margin-top:20px;
      font-size:27px;

      &:hover{
        background-color:#24a667c2;
      }
    }
  }
`