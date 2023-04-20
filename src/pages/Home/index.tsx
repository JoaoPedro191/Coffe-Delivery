import {
  HomeContainer,
  Container,
  ContentLeftContainer,
  Subtitle,
  SectionCoffesContainer,
} from "./style";

import coffeDeliveryImage from "../../assets/Imagem.png";
import coffeCardData from "../../../coffeCardData.json";
import { ProductInformation } from "./components/ProductInformation";
import { SectionCoffes } from "./components/SectionCoffes";

const Home = () => {
  // localStorage.setItem("coffeData", JSON.stringify(coffeCardData));
  const coffeData = JSON.parse(localStorage.getItem("coffeData") || "");

  return (
    <HomeContainer>
      <Container>
        <ContentLeftContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ProductInformation />
        </ContentLeftContainer>
        <img src={coffeDeliveryImage} />
      </Container>
      <Subtitle>Nossos cafés</Subtitle>
      <SectionCoffesContainer>
        {coffeData.map((coffe) => {
          return (
            <>
              <SectionCoffes
                image={coffe.image}
                name={coffe.name}
                paragraphy={coffe.paragraphy}
                price={coffe.price}
                categories={coffe.categories}
                id={coffe.id}
                selected={coffe.selected}
              />
            </>
          );
        })}
      </SectionCoffesContainer>
    </HomeContainer>
  );
};

export { Home };
