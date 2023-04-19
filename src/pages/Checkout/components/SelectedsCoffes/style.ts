import styled from "styled-components";

export const Testediv2 = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e5e5;
  padding-bottom: 1.5rem;
  margin-bottom: 24px;

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: #574f4d;
  }
`;

export const Testediv3 = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const TesteDiv4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: #403937;
  }
`;

export const Testediv5 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    gap: 0.25rem;
    background-color: #e6e5e5;
    border-radius: 6px;
    width: 4.5rem;
    height: 2rem;

    span {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: #272221;
    }

    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #e6e5e5;
  padding: 0 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  height: 32px;
  width: 91px;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  color: #574f4d;
  cursor: pointer;
`;
