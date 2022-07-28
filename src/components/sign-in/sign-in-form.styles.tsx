import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px){
    width: 90%;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px){
    flex-direction: column;
    place-items: center center;
    
    button{
      margin-bottom: 5px;
      width: 75%;
    }
    
  }
`
export const Heading1 = styled.h1`
  margin: 10px 0;
`