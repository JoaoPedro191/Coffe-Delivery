import {
  ProductInformationContainer,
  ContentLeftContainer,
  ContentRightContainer,
} from "./style";

import shoppingCartImage from "../../../../assets/ShoppingCart.svg";
import clockImage from "../../../../assets/clock.svg";
import packagingImage from "../../../../assets/packaging.svg";
import CoffeImage from "../../../../assets/Coffe.svg";

const ProductInformation = () => {
  return (
    <ProductInformationContainer>
      <ContentLeftContainer>
        <div>
          <img src={shoppingCartImage} />
          <span>Compra simples e segura</span>
        </div>
        <div>
          <img src={clockImage} />
          <span>Entrega rápida e rastreada</span>
        </div>
      </ContentLeftContainer>
      <ContentRightContainer>
        <div>
          <img src={packagingImage} />
          <span>Embalagem mantém o café intacto</span>
        </div>
        <div>
          <img src={CoffeImage} />
          <span>O café chega fresquinho até você</span>
        </div>
      </ContentRightContainer>
    </ProductInformationContainer>
  );
};

export { ProductInformation };
