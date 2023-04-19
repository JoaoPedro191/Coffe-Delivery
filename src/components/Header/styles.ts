import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    input {
      width: 0;
      height: 0;
      visibility: hidden;

      &:checked + label {
        background-color: #242424;
      }

      &:checked + label::after {
        left: 74px;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #777, #3a3a3a);
      }
    }

    label {
      width: 78px;
      height: 39px;
      position: relative;
      display: block;
      background-color: #ebebeb;
      border-radius: 200px;
      box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
        inset 0px -5px 15px rgba(255, 255, 255, 0.4);
      cursor: pointer;
      transition: 0.3s;

      &::after {
        content: "";
        width: 35px;
        height: 35px;
        position: absolute;
        top: 2px;
        left: 3px;
        background: linear-gradient(180deg, #ffcc89, #d8860b);
        border-radius: 50%;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
      }
    }
  }
`;

export const MapPinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background-color: ${(props) => props.theme["Purple-Light"]};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme["Purple-Dark"]};
`;

export const ShoppingCartButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["Yellow-Light"]};
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  span {
    position: absolute;
    top: -8px;
    left: 26.35px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    background-color: #c47f17;
    border-radius: 50%;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    color: #ffffff;
    line-height: 130%;
  }
`;
