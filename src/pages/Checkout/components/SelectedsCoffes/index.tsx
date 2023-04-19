import {
  Testediv2,
  Testediv3,
  TesteDiv4,
  Testediv5,
  ButtonDelete,
} from "./style";

import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { coffeSelectedsContext } from "../../../../context/coffesSelectedsContext";

interface SelectedsCoffesProps {
  selectedcoffeImage?: string;
  name?: string;
  price?: string;
  id?: string | undefined;
}
const SelectedsCoffes = ({
  selectedcoffeImage,
  name,
  price,
  id,
}: SelectedsCoffesProps) => {
  const { handleRemoveCoffes, quantityCoffe } = useContext(
    coffeSelectedsContext
  );

  return (
    <Testediv2>
      <Testediv3>
        <img src={selectedcoffeImage} />
        <TesteDiv4>
          <span>{name}</span>
          <Testediv5>
            <div>
              <button>
                <Minus weight="bold" size={14} color="#8047F8" />
              </button>
              <span>{quantityCoffe}</span>
              <button>
                <Plus weight="bold" size={14} color="#8047F8" />
              </button>
            </div>
            <ButtonDelete
              onClick={() => {
                handleRemoveCoffes(id);
              }}
            >
              <Trash size={16} color="#8047F8" />
              remover
            </ButtonDelete>
          </Testediv5>
        </TesteDiv4>
      </Testediv3>
      <span>R$ {price}</span>
    </Testediv2>
  );
};

export { SelectedsCoffes };
