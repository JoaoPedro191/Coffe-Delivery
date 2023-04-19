import {
  CheckoutContainer,
  ContentLeftContainer,
  ContentRightContainer,
  Wrapper,
  Testediv1,
  Footer,
  TotalItems,
  Delivery,
  Total,
} from "./style";

import expressTraditionalCoffe from "../../assets/CaféExpressoTradicional.svg";
import LatteCoffe from "../../assets/Latte.svg";

import { SelectedsCoffes } from "./components/SelectedsCoffes";
import { NewOrderForm } from "./components/NewOrderForm";
import { useContext } from "react";
import { coffeSelectedsContext } from "../../context/coffesSelectedsContext";

const Checkout = () => {
  const coffeData = JSON.parse(localStorage.getItem("coffesSelected") || "");
  return (
    <CheckoutContainer>
      <form>
        <Wrapper>
          <ContentLeftContainer>
            <span>Complete seu pedido</span>
            <NewOrderForm />
          </ContentLeftContainer>
          <ContentRightContainer>
            <span>Cafés selecionados</span>
            <Testediv1>
              {coffeData.map((coffe) => {
                return (
                  <>
                    <SelectedsCoffes
                      selectedcoffeImage={coffe.image}
                      name={coffe.name}
                      price={coffe.price}
                      id={coffe.id}
                    />
                  </>
                );
              })}
              {/* <SelectedsCoffes selectedcoffeImage={expressTraditionalCoffe} /> */}
              {/* <SelectedsCoffes selectedcoffeImage={LatteCoffe} /> */}
              <Footer>
                <TotalItems>
                  <span>Total de itens</span>
                  <span>R$ 29,70</span>
                </TotalItems>
                <Delivery>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </Delivery>
                <Total>
                  <span>Total</span>
                  <span>R$ 33,20</span>
                </Total>
                <button>confirmar pedido</button>
              </Footer>
            </Testediv1>
          </ContentRightContainer>
        </Wrapper>
      </form>
    </CheckoutContainer>
  );
};
export { Checkout };
