import "./App.css";
import { Container } from "./components/container";
import { Nav } from "./components/nav";
import { Alert } from "./components/alert";
import { useSelector } from "react-redux";

function App() {
  const metropole = useSelector((state) => state.metropole);
  const outreMer = useSelector((state) => state.outreMer);

  return (
    <div className="py-5">
      <Nav />
      <div className="flex lg:flex-row flex-col justify-between w-11/12 m-auto py-11 ">
        <Container content={metropole} title={"Ville de métropole"} />
        <Container content={outreMer} title={"Ville d'outre mer"} />
      </div>
    </div>
  );
}

export default App;
