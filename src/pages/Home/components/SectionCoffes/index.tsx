import {
  CardContainer,
  ContentCard,
  Wrapper,
  PriceContainer,
  Testando3,
  ShoppingCartButton,
} from "./style";

import { ShoppingCartSimple } from "phosphor-react";
import { Minus, Plus } from "phosphor-react";
import { coffeSelectedsContext } from "../../../../context/coffesSelectedsContext";
import { useContext } from "react";

interface SectionCoffesProps {
  id: string;
  image: string;
  name: string;
  paragraphy: string;
  price: string;
  categories: string[];
  selected: boolean;
}

const SectionCoffes = ({
  image,
  name,
  paragraphy,
  price,
  categories,
  id,
  selected,
}: SectionCoffesProps) => {
  const { handleCoffesSelect } = useContext(coffeSelectedsContext);

  const coffeData = JSON.parse(localStorage.getItem("coffesSelected") || "");

  return (
    <CardContainer>
      <ContentCard>
        <img src={image} />
        <div>
          {categories.map((category) => (
            <span>{category}</span>
          ))}
        </div>
        <h3>{name}</h3>
        <p>{paragraphy}</p>
      </ContentCard>
      <Wrapper>
        <PriceContainer>
          <span>R$</span>
          <span>{price}</span>
        </PriceContainer>
        <div>
          <Testando3>
            <button>
              <Minus color="#8047F8" weight="bold" size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus color="#8047F8" weight="bold" size={14} />
            </button>
          </Testando3>
          <ShoppingCartButton
            onClick={() => {
              handleCoffesSelect(id, selected);
              const actual = JSON.parse(
                localStorage.getItem("coffesSelected")!
              );
              actual.push({
                id,
                categories,
                image,
                name,
                paragraphy,
                price,
                quantity: 1,
                selected: true,
              });

              console.log(actual);
            }}
          >
            <ShoppingCartSimple weight="fill" color="white" size={20} />
          </ShoppingCartButton>
        </div>
      </Wrapper>
    </CardContainer>
  );
};

export { SectionCoffes };
