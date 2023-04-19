import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: 5.875rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentLeftContainer = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: #272221;
    max-width: 36.75rem;
    width: 100%;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: #403937;
    max-width: 36.75rem;
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Subtitle = styled.h2`
  margin-top: 8.75rem;
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: #403937;
`;

export const SectionCoffesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-row-gap: 2.5rem;
  margin-top: 3.375rem;
`;

// export const CardContainer = styled.div`
//   width: 16rem;
//   height: 19.375rem;
//   background-color: #f3f2f2;
//   border-radius: 6px 36px;
// `;

// export const ContentCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: -1.25rem;

//   div {
//     display: flex;
//     align-items: center;
//     margin-top: 0.75rem;
//     gap: 0.25rem;

//     span {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       padding: 0.25rem 0.5rem;
//       background-color: #f1e9c9;
//       border-radius: 100px;
//       font-family: "Roboto", sans-serif;
//       font-weight: 700;
//       font-size: 0.625rem;
//       line-height: 130%;
//       color: ${(props) => props.theme["Yellow-Dark"]};
//     }
//   }

//   h3 {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 1rem;
//     font-family: "Baloo 2", cursive;
//     font-weight: 700;
//     font-size: 1.25rem;
//     line-height: 130%;
//     color: #403937;
//   }

//   p {
//     font-family: "Roboto", sans-serif;
//     font-weight: 400;
//     font-size: 0.875rem;
//     line-height: 130%;
//     text-align: center;
//     color: #8d8686;
//     max-width: 13.5rem;
//     width: 100%;
//     margin-top: 0.5rem;
//   }
// `;

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 2.0625rem;
//   padding: 0 1.5rem 1.25rem 1.5rem;

//   div {
//     &:nth-child(2) {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       gap: 0.5rem;
//     }
//   }
// `;

// export const PriceContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.2rem;

//   span {
//     &:first-child {
//       font-family: "Roboto", sans-serif;
//       font-weight: 400;
//       font-size: 0.875rem;
//       color: #574f4d;
//     }
//   }

//   span {
//     &:last-child {
//       font-family: "Baloo 2", cursive;
//       font-weight: 800;
//       font-size: 1.5rem;
//       color: #574f4d;
//     }
//   }
// `;

// export const ShoppingCartButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5rem;
//   border: none;
//   cursor: pointer;
//   background-color: ${(props) => props.theme["Purple-Dark"]};
//   border-radius: 6px;
//   width: 2.375rem;
//   height: 2.375rem;
// `;

// export const Testando3 = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5rem;
//   gap: 0.25rem;
//   background-color: #e6e5e5;
//   border-radius: 6px;
//   width: 4.5rem;
//   height: 2.375rem;

//   button {
//     background-color: transparent;
//     outline: none;
//     border: none;
//     cursor: pointer;
//   }

//   span {
//     font-family: "Roboto", sans-serif;
//     font-weight: 400;
//     font-size: 1rem;
//     line-height: 130%;
//     color: #272221;
//   }
// `;
