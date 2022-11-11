import "./styles.css"
import LogoMonitoraves from "../../assets/LogoLogoMonitoraves.png"
import MinhaConta from "../../assets/MinhaConta.png"

import { useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import { useState, useEffect } from "react"

import { alterNomeGrafico, alterNomeTabela } from "../../store/modules/nomeSecao/actions"
import { tipoGraficoEscolhido } from "../../store/modules/tipoFiltro/actions"
import { tipoLoteEscolhido } from "../../store/modules/lotes/actions"
import { pesoMedioSexo } from "../../store/modules/pesoMedioSexo/actions"
import { morteMediaSexo } from "../../store/modules/morteMediaSexo/actions"

import axios from "axios"

const BasePage = ({children}) =>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [pesoMedioSexoResponse, setPesoMedioSexoResponse] = useState([])
    const [morteMediaSexoResponse, setMorteMediaSexoResponse] = useState([])
    const [lotes, setLotes] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/lotes/")
        .then((response) => setLotes(response.data))
    },[])

    useEffect(()=>{
        axios.get("http://localhost:3001/peso-medio-sexo/")
        .then((response) => setPesoMedioSexoResponse(response.data))
    },[])

    useEffect(()=>{
        axios.get("http://localhost:3001/morte-media-sexo/")
        .then((response) => setMorteMediaSexoResponse(response.data))
        
    },[])

    const opcaoEscolhidaGrafico = (tipoGrafico) =>{
        dispatch(morteMediaSexo(morteMediaSexoResponse))
        dispatch(pesoMedioSexo(pesoMedioSexoResponse))
        dispatch(alterNomeGrafico("Gráficos"))
        dispatch(tipoGraficoEscolhido(tipoGrafico))
        navigate(`/filtro/${tipoGrafico}`)
    }

    const opcaoEscolhidaTabelas = (tipoTabela) =>{

        navigate(`/filtro/${tipoTabela}`)
        dispatch(alterNomeTabela("Tabelas"))
        dispatch(tipoGraficoEscolhido(tipoTabela))
    }

    const listarTodosOsLotes = (tipoLote) =>{
        dispatch(tipoLoteEscolhido({tipo: tipoLote, lotesData: lotes}))
        navigate("/lotes/infolote")
    }

    return(
        <div className="container-basepage">
            <header className="cabecalho">
                <img className="logoMonitorave" src={LogoMonitoraves} alt="Logo da Monitoraves representado por um frango em cima do nome monitoraves" onClick={()=> navigate("/")} />
                <ul className="menu-cabecalho">
                    <li onClick={()=> navigate("/")} >Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>

                <img className="minhaConta" src={MinhaConta} alt="" />                
            </header>

            <nav className="menu-lateral">
                <ul className="opcao-menu-lateral opcao-resumo">
                    <h5 className="resumo titulo-opcao" onClick={()=> navigate("/resumo")} >Resumo</h5>
                    <li onClick={()=> navigate("/resumo")}>Informações da granja</li>
                </ul>
                <ul className="opcao-menu-lateral opcao-lotes">
                    <h5 className="lotes titulo-opcao" onClick={()=> navigate("/lotes")} >Lotes</h5>
                    <li onClick={()=> listarTodosOsLotes("TODOSLOTES") } >Todos os lotes</li>
                    <li>Listar um lote</li>
                </ul>
                <ul className="opcao-menu-lateral opcao-graficos">
                    <h5 className="graficos titulo-opcao" onClick={()=> navigate("/graficos")} >Gráficos</h5>
                    <li onClick={() => opcaoEscolhidaGrafico("mortalidadexlote")} >Mortalidade x Lote</li>
                    <li onClick={() => opcaoEscolhidaGrafico("pesoxlote")}>Peso x Lote</li>
                    <li onClick={() => opcaoEscolhidaGrafico("caxlote")}>CA x Lote</li>
                    <li onClick={() => opcaoEscolhidaGrafico("pmedioxsexo")}>Peso Médio x Sexo</li>
                    <li onClick={() => opcaoEscolhidaGrafico("mortemediaxsexo")}>Mortalidade Média x Sexo</li>
                </ul>
                <ul className="opcao-menu-lateral opcao-tabelas">
                    <h5 className="tabelas titulo-opcao" onClick={()=> navigate("/tabelas")} >Tabelas</h5>
                    <li onClick={() => opcaoEscolhidaTabelas("mortalidadexlote")} >Mortalidade x Lote</li>
                    <li onClick={() => opcaoEscolhidaTabelas("pesoxlote")}>Peso x Lote</li>
                    <li onClick={() => opcaoEscolhidaTabelas("caxlote")}>CA x Lote</li>
                    <li onClick={() => opcaoEscolhidaTabelas("pmedioxsexo")}>Peso Médio x Sexo</li>
                    <li onClick={() => opcaoEscolhidaTabelas("mortemediaxsexo")}>Mortalidade Média x Sexo</li>
                </ul>
            </nav>

            <section className="conteudo">
                {children}
            </section>
        </div>
    )
}

export default BasePage;