import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";

interface RouterProps {
  ToggleButton: Function;
}

const Router = (props: RouterProps) => {
  console.log(props);
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout ToggleButton={props.ToggleButton} />}
      >
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export { Router };
