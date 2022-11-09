import "./styles.css"
import Grafico from "../../assets/grafico.jpg"

import { useNavigate } from "react-router-dom"

const GraficosComponent = () =>{

    const navigate = useNavigate()

    return(
        <div className="secao-graficos">

            <p className="titulo-secao">Gráficos</p>

            <div className="box-opcao-grafico">
                <button className="opcao-grafico morte-lote" onClick={() => navigate("/filtro/mortalidadexlote")} data-aos="fade-right">Mortalidade x Lote</button>
                <button className="opcao-grafico peso-lote" onClick={() => navigate("/filtro/pesoxlote")} data-aos="fade-left" >Peso x Lote</button>
                <button className="opcao-grafico ca-lote" onClick={() => navigate("/filtro/caxlote")} data-aos="fade-right" >CA x Lote</button>
                <button className="opcao-grafico peso-sexo" onClick={() => navigate("/filtro/pmedioxsexo")} data-aos="fade-left" >Peso Médio x Sexo</button>
                <button className="opcao-grafico morte-sexo" onClick={() => navigate("/filtro/mortemediaxsexo")} data-aos="fade-right" >Mortalidade Média x Sexo</button>
            </div>

            {/* Div ativada na tela de 1024px */}
            <div className="box-opcao-grafico-1024" data-aos="fade-up">
                <img className="grafico-1024" src={Grafico} alt="imagem de um grafico de coluna e um grafico de linha." />
                <button className="opcao-grafico morte-lote" onClick={() => navigate("/filtro/mortalidadexlote")} >Mortalidade x Lote</button>
                <button className="opcao-grafico peso-lote" onClick={() => navigate("/filtro/pesoxlote")} >Peso x Lote</button>
                <button className="opcao-grafico ca-lote" onClick={() => navigate("/filtro/caxlote")} >CA x Lote</button>
                <button className="opcao-grafico peso-sexo" onClick={() => navigate("/filtro/pmedioxsexo")} >Peso Médio x Sexo</button>
                <button className="opcao-grafico morte-sexo" onClick={() => navigate("/filtro/mortemediaxsexo")} >Mortalidade Média x Sexo</button>
            </div>
        </div>
    )
}

export default GraficosComponent