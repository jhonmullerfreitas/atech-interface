import "./styles.css"
import Grafico from "../../assets/grafico.jpg"

import { alterNomeGrafico } from "../../store/modules/nomeSecao/actions"
import { tipoGraficoEscolhido } from "../../store/modules/tipoFiltro/actions"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


const GraficosComponent = () =>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const opcaoEscolhida = (tipoGrafico) => {
        navigate(`/filtro/${tipoGrafico}`)
        dispatch(alterNomeGrafico("Gráficos"))
        dispatch(tipoGraficoEscolhido(tipoGrafico))
    }

    return(
        <div className="secao-graficos">

            <p className="titulo-secao">Gráficos</p>

            <div className="box-opcao-grafico">
                <button className="opcao-grafico morte-lote" onClick={() => opcaoEscolhida("mortalidadexlote")} data-aos="fade-right">Mortalidade x Lote</button>
                <button className="opcao-grafico peso-lote" onClick={() => opcaoEscolhida("pesoxlote")} data-aos="fade-left" >Peso x Lote</button>
                <button className="opcao-grafico ca-lote" onClick={() => opcaoEscolhida("caxlote")} data-aos="fade-right" >CA x Lote</button>
                <button className="opcao-grafico peso-sexo" onClick={() => opcaoEscolhida("pmedioxsexo")} data-aos="fade-left" >Peso Médio x Sexo</button>
                <button className="opcao-grafico morte-sexo" onClick={() => opcaoEscolhida("mortemediaxsexo")} data-aos="fade-right" >Mortalidade Média x Sexo</button>
            </div>

            {/* Div ativada na tela de 1024px */}
            <div className="box-opcao-grafico-1024" data-aos="fade-up">
                <img className="grafico-1024" src={Grafico} alt="imagem de um grafico de coluna e um grafico de linha." />
                <button className="opcao-grafico morte-lote" onClick={() => opcaoEscolhida("mortalidadexlote")} >Mortalidade x Lote</button>
                <button className="opcao-grafico peso-lote" onClick={() => opcaoEscolhida("pesoxlote")} >Peso x Lote</button>
                <button className="opcao-grafico ca-lote" onClick={() => opcaoEscolhida("caxlote")} >CA x Lote</button>
                <button className="opcao-grafico peso-sexo" onClick={() => opcaoEscolhida("pmedioxsexo")} >Peso Médio x Sexo</button>
                <button className="opcao-grafico morte-sexo" onClick={() => opcaoEscolhida("mortemediaxsexo")} >Mortalidade Média x Sexo</button>
            </div>
        </div>
    )
}

export default GraficosComponent