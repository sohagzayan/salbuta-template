import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

`
export const Container = styled.div`
  width   : 80%;
  padding: 20px;
  margin: auto;

  @media (max-width: 775px){
      width: 100%;
      padding:0px;
      width: 95%;
  }
`