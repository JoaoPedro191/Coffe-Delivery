import { ReactNode, createContext } from "react";
import { useState } from "react";
import coffeCardData from "../../coffeCardData.json";

interface coffes {
  id: string | undefined;
  image: string;
  name: string;
  categories: string[];
  paragraphy: string;
  price: string;
  selected: boolean;
  quantity: string;
}

interface coffeSelectedsContextType {
  quantityCoffe: number;
  coffes: coffes[];
  // handleCoffeQuantityIncrement: () => void;
  // handleCoffeQuantityDecrement: () => void;
  handleRemoveCoffes: (id: string | undefined) => void;
  handleCoffesSelect: (id: string, selected: boolean) => void;
}

interface CoffeSelectedsContextProviderProps {
  children: ReactNode;
}

export const coffeSelectedsContext = createContext(
  {} as coffeSelectedsContextType
);

const CoffeSelectedsContextProvider = ({
  children,
}: CoffeSelectedsContextProviderProps) => {
  const [coffes, setCoffes] = useState<coffes[]>([]);
  const [quantityCoffe, setQuantityCoffe] = useState<number>(1);
  const coffeData = JSON.parse(localStorage.getItem("coffeData") || "");

  // const handleCoffeQuantityIncrement = () => {
  //   setQuantityCoffe((state) => state + 1);
  // };

  // const handleCoffeQuantityDecrement = () => {
  //   if (quantityCoffe > 1) {
  //     setQuantityCoffe((state) => state - 1);
  //   }
  // };

  const handleCoffesSelect = (id: string, selected: boolean) => {
    const coffesSelected = coffeData.findIndex((coffe) => {
      return coffe.id === id;
    });
    coffeData[coffesSelected].selected = !selected;

    const filterlistCoffesSelected = coffeData.filter((coffe) => {
      return coffe.selected === true;
    });

    localStorage.setItem(
      "coffesSelected",
      JSON.stringify(filterlistCoffesSelected)
    );
  };

  const handleRemoveCoffes = (id: string | undefined) => {
    const removeCoffes = coffes.filter((coffe) => {
      return coffe.id !== id;
    });
    setCoffes(removeCoffes);
  };

  return (
    <coffeSelectedsContext.Provider
      value={{
        handleRemoveCoffes,
        coffes,
        handleCoffesSelect,
        // handleCoffeQuantityIncrement,
        // handleCoffeQuantityDecrement,
        quantityCoffe,
      }}
    >
      {children}
    </coffeSelectedsContext.Provider>
  );
};

export { CoffeSelectedsContextProvider };
