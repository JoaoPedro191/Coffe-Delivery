import { HeaderContainer, MapPinButton, ShoppingCartButton } from "./styles";
import LogoCoffeDelivery from "../../assets/LogoCoffeDelivery.svg";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { coffeSelectedsContext } from "../../context/coffesSelectedsContext";

interface HeaderProps {
  ToggleButton: Function;
}

interface datasLocationType {
  country_capital: string;
  region_code: string;
}

const Header = (props: HeaderProps) => {
  const [datasLocation, setDatasLocation] = useState<datasLocationType>({});

  const { coffes } = useContext(coffeSelectedsContext);

  useEffect(() => {
    console.log(coffes)
  }, [coffes])

  const location = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      const { country_capital, region_code } = data;
      setDatasLocation({ country_capital, region_code });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    location();
  }, []);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffeDelivery} alt="" />
      </NavLink>
      <nav>
        <MapPinButton>
          <MapPin weight="fill" color="#8047F8" size={22} />
          {`${datasLocation.country_capital}, ${datasLocation.region_code}`}
        </MapPinButton>
        <input
          onClick={() => {
            props.ToggleButton();
          }}
          type="checkbox"
          id="darkmode-toggle"
        />
        <label htmlFor="darkmode-toggle"></label>
        <NavLink to="/checkout">
          <ShoppingCartButton>
            <ShoppingCart weight="fill" color="#C47F17" size={22} />
            <span>{coffes.length}</span>
          </ShoppingCartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export { Header };

// theme toogler
