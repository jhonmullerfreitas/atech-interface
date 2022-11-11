import { Route, Routes as Switch } from "react-router-dom";
import Graficos from "../pages/Graficos";
import Home from "../pages/Home";
import Lotes from "../pages/Lotes";
import Resumo from "../pages/Resumo";
import Tabelas from "../pages/Tabelas";
import MortalidadexLote from "../pages/MortalidadexLote";
import PesoxLote from "../pages/PesoxLote";
import CaxLote from "../pages/CaxLote";
import PMedioxSexo from "../pages/PMedioxSexo";
import MorteMediaxSexo from "../pages/MorteMediaxSexo";
import InfoLotes from "../pages/InfoLotes";

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/graficos" element={<Graficos/>} />
            <Route exact path="/lotes" element={<Lotes/>} />
            <Route exact path="/tabelas" element={<Tabelas/>} />
            <Route exact path="/resumo" element={<Resumo/>} />

            <Route exact path="/filtro/mortalidadexlote" element={<MortalidadexLote/>} />
            <Route exact path="/filtro/pesoxlote" element={<PesoxLote/>} />
            <Route exact path="/filtro/caxlote" element={<CaxLote/>} />
            <Route exact path="/filtro/pmedioxsexo" element={<PMedioxSexo/>} />
            <Route exact path="/filtro/mortemediaxsexo" element={<MorteMediaxSexo/>} />

            <Route exact path="/lotes/infolote" element={<InfoLotes/>} />

        </Switch>
    );
}

export default Routes;