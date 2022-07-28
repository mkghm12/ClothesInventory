import styled from "styled-components";
import Button from "../button/button.component";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const Heading1 = styled.h1`
  margin: 10px 0;
`;
export const CustomButton = styled(Button)`
  
@media screen and (max-width: 800px){
      width: 75%;
      position: relative;
      left: 12.5%;
      right: 12.5%;

    }
  
`;
