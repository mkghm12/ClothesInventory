import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  height: 200px;
  min-width: 800px;

  @media screen and (max-width: 800px) {
    min-width: unset;
    width: 80%;
  }
`;

export const PaymentButton = styled(Button)`
  margin-top: 30px;
  margin-left: auto;
  @media screen and (max-width: 800px) {
    margin: auto;
  }
`;
