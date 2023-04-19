import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentLeftContainer = styled.section`
  span {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: #403937;
  }
`;

//====================conteudo da direita===============================

export const ContentRightContainer = styled.section`
  span {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: #403937;
  }
`;

export const Testediv1 = styled.div`
  background-color: #f3f2f2;
  width: 28rem;
  border-radius: 6px 44px;
  margin-top: 0.9375rem;
  padding: 2.5rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0.5rem;
    background-color: #dbac2c;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 6px;
    margin-top: 0.75rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    color: #ffffff;
  }
`;

export const TotalItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Delivery = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
