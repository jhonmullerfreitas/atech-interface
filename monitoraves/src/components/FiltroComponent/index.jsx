import "./styles.css"
import Lupa from "../../assets/lupa.png"
import { useSelector} from "react-redux"
import {useEffect, useState} from "react"
import axios from "axios"
import ImgGrafico from "../ImgGrafico"
import PesoMedioGrafico from "../GraficoPesoMedio"
import MorteMediaGrafico from "../GraficoMorteMedia"
import TabelaPesoMedio from "../TabelaPesoMedio"
import TabelaMorteMedia from "../TabelaMorteMedia"
import ImgTabela from "../ImgTabela"

const FiltroComponent = () => {

    const [idReq, setIdReq] = useState(1)
    const [idInput, setIdInput] = useState(1)
    const [mortalidade, setMortalidade] = useState([])
    const [pesos, setPesos] = useState([])
    const [ca, setCa] = useState([])
    const [lote, setLote] = useState([])
   
    const tituloSecao = useSelector((store) => store.nomeSecao)
    const nomeFiltro = useSelector((store) => store.tipoFiltro)

    useEffect(()=>{
        axios.get(`http://localhost:3001/lotes/${idReq}`)
        .then((response) => setLote(response.data))
        
        axios.get(`http://localhost:3001/mortalidades/${idReq}`)
        .then((response) => setMortalidade(response.data))

        axios.get(`http://localhost:3001/pesos/${idReq}`)
        .then((response) => setPesos(response.data))

        axios.get(`http://localhost:3001/conversao-alimentar/${idReq}`)
        .then((response) => setCa(response.data))
    }, [idReq])

    const alterarId = () =>{
        setIdReq(idInput)
    }

    return(
        <div className="secao-filtro" data-aos="fade-up">
            <p className="titulo-secao">{tituloSecao}</p> 
            <div className="busca-filtro">
                <div className="busca">
                    {
                        nomeFiltro === "Peso Médio x Sexo" ? <p></p>:
                        nomeFiltro === "Morte Média x Sexo" ? <p></p>:
                        <div>
                            <input className="input-pesquisar" type="number" placeholder="Digite o id do lote" onChange={(e)=> setIdInput(e.target.value)} />
                            <button className="botao-pesquisar" onClick={()=> alterarId() }>
                                <img className="lupa" src={Lupa} alt="imagem de uma lupa bege"/>
                            </button>
                        </div>
                    }
                </div>
                <p className="grafico-escolha">{nomeFiltro}</p>
            </div>

            <div className="info-img">
                {
                    nomeFiltro === "Peso Médio x Sexo" ? <div className="info-lote"><p>Todos os lotes</p></div>:
                    nomeFiltro === "Morte Média x Sexo" ? <div className="info-lote"><p>Todos os lotes</p></div>:
                    <div className="info-lote">
                        <p>ID: {lote.id}</p>
                        <p>Nascimento: {lote.dataNascimento}</p>
                        <p>Sexo: {lote.sexo}</p>
                        <p>Galpão: {lote.tipoGalpao}</p>
                        <p>Total Aves: {lote.qtdAves}</p>
                    </div>
                }

                <div className="espaco-vazio">
                    {
                        tituloSecao === "Tabelas" ? 
                        ( 
                            nomeFiltro==="Peso Médio x Sexo" ? <TabelaPesoMedio/> : 
                            nomeFiltro==="Morte Média x Sexo" ? <TabelaMorteMedia/>:
                            nomeFiltro==="Mortalidade x Lote" ? <ImgTabela datas={mortalidade[3]}  valores={mortalidade[2]} filtro={"Mortes"}/>:
                            nomeFiltro==="Peso x Lote" ? <ImgTabela datas={pesos[3]}  valores={pesos[2]} filtro={"Peso"}/> :
                            <ImgTabela datas={ca[3]}  valores={ca[2]} filtro={"CA"}/>
                        ) 
                        :
                        <>
                            {
                                nomeFiltro === "Mortalidade x Lote" ?
                                <ImgGrafico tipo={nomeFiltro} infoX={mortalidade[2]} infoY={mortalidade[3]}/>:
                                nomeFiltro === "Peso x Lote" ?
                                <ImgGrafico tipo={nomeFiltro} infoX={pesos[2]} infoY={pesos[3]}/> :
                                nomeFiltro === "CA x Lote" ?
                                <ImgGrafico tipo={nomeFiltro} infoX={ca[2]} infoY={ca[3]}/> :
                                nomeFiltro === "Peso Médio x Sexo" ?
                                <PesoMedioGrafico/> :
                                nomeFiltro === "Morte Média x Sexo" ?
                                <MorteMediaGrafico/> :
                                <p>Sem informação</p>
                            }
                        </>
                    }
                </div>

            </div>
        </div>
    )
}

export default FiltroComponent;