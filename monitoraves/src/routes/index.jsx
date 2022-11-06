import { Route, Routes as Switch } from "react-router-dom";
import Graficos from "../pages/Graficos";
import Home from "../pages/Home";
import Lotes from "../pages/Lotes";
import Resumo from "../pages/Resumo";
import Tabelas from "../pages/Tabelas";

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/graficos" element={<Graficos/>} />
            <Route exact path="/lotes" element={<Lotes/>} />
            <Route exact path="/tabelas" element={<Tabelas/>} />
            <Route exact path="/resumo" element={<Resumo/>} />
        </Switch>
    );
}

export default Routes;