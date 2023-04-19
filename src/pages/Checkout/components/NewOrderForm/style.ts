import styled from "styled-components";

export const FormContainer = styled.div`
  width: 40rem;
  height: 23.25rem;
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 0.9375rem;
  background-color: #f3f2f2;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: #403937;
    }

    p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      color: #574f4d;
    }
  }
`;

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  div {
    &:nth-child(3) {
      display: flex;
      gap: 0.75rem;
    }
  }

  div {
    &:nth-child(4) {
      display: flex;
      gap: 0.75rem;
    }
  }
`;

export const BaseInput = styled.input`
  padding: 0.75rem;
  background-color: #eeeded;
  border: 1px solid #e6e5e5;
  outline: none;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  &::placeholder {
    color: #8d8686;
  }
`;

export const InputCEP = styled(BaseInput)`
  width: 12.5rem;
`;

export const InputStreet = styled(BaseInput)``;

export const InputNumberOfHome = styled(BaseInput)``;

export const ContainerInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: #eeeded;
  border: 1px solid #e6e5e5;
  border-radius: 4px;

  span {
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
    color: #8d8686;
  }
`;

export const InputComplementOfAdress = styled.input`
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;

  &::placeholder {
    color: #8d8686;
  }
`;

export const InputNeighborhood = styled(BaseInput)``;

export const InputCity = styled(BaseInput)`
  flex: 1;
`;
export const InputUF = styled(BaseInput)`
  width: 3.75rem;
`;

export const PaymentContainer = styled.div`
  width: 40rem;
  height: 12.9375rem;
  padding: 2.5rem;
  margin-top: 0.75rem;
  background-color: #f3f2f2;
  border-radius: 6px;
`;

export const PaymentContent = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: #403937;
    }
    p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      color: #574f4d;
    }
  }
`;

export const FormOfPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 0.75rem;
`;

export const BaseButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #e6e5e5;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  gap: 0.75rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  /* line-height: 160%; */
  color: #574f4d;
  text-transform: uppercase;
`;

export const CreditCardButton = styled(BaseButton)``;
export const DebitCardButton = styled(BaseButton)``;
export const MoneyButton = styled(BaseButton)``;
