import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
height: 300px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const FormContainer = styled.form`
height: 200px;
min-width: 800px;
`

export const PaymentButton = styled(Button)`
margin-top: 30px;
margin-left: auto;
`