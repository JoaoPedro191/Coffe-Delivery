import { Header } from "../../components/Header";
import { DefaultLayoutContainer } from "./style";
import { Outlet } from "react-router-dom";

interface DefaultLayoutProps {
  ToggleButton: Function;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <DefaultLayoutContainer>
      <Header ToggleButton={props.ToggleButton} />
      <Outlet />
    </DefaultLayoutContainer>
  );
};

export { DefaultLayout };
