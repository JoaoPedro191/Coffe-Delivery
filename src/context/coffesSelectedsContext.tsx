import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";
import coffeCardData from "../../coffeCardData.json";

const STORAGE_KEY = 'coffesSelected'

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
  handleCoffesSelect: (item: coffes) => void;
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
  const [coffes, setCoffes] = useState<coffes[]>(() => {
    const storageCoffees = localStorage.getItem(STORAGE_KEY)
    if (storageCoffees) {
      return JSON.parse(storageCoffees)
    }
    return []
  });
  const [quantityCoffe, setQuantityCoffe] = useState<number>(1);

  // const coffeData = JSON.parse(localStorage.getItem("coffeData") || "");

  // const handleCoffeQuantityIncrement = () => {
  //   setQuantityCoffe((state) => state + 1);
  // };

  // const handleCoffeQuantityDecrement = () => {
  //   if (quantityCoffe > 1) {
  //     setQuantityCoffe((state) => state - 1);
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(coffes))
  // }, [coffes])

  const handleCoffesSelect = (item: coffes) => {
    const currentItems = coffes
    currentItems?.push(item)
    setCoffes([...currentItems])
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentItems))
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
        handleCoffesSelect,
        // handleCoffeQuantityIncrement,
        // handleCoffeQuantityDecrement,
        quantityCoffe,
        coffes
      }}
    >
      {children}
    </coffeSelectedsContext.Provider>
  );
};

export { CoffeSelectedsContextProvider };
