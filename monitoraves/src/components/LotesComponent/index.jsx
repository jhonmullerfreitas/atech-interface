import "./styles.css"
import Galinhas from "../../assets/galinhas.jpg"

import { useState, useEffect } from "react"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"

import axios from "axios"

import { tipoLoteEscolhido } from "../../store/modules/lotes/actions"

const LotesComponent = () =>{

    const [lotes, setLotes] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/lotes/")
        .then((response) => setLotes(response.data))
    },[])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const opcaoEscolhida = (tipoLote) =>{
        dispatch(tipoLoteEscolhido({tipo: tipoLote, lotesData: lotes}))
        navigate("/lotes/infolote")
    }
    
    return(
        <div className="secao-lotes">
            <p className="titulo-section" >Lotes</p>

            <div className="box-opcao-lote">
                <button className="opcao-lote todos-lotes" data-aos="fade-right" onClick={() => opcaoEscolhida("TODOSLOTES") } >Todos os lotes</button>
                <button className="opcao-lote consultar" data-aos="fade-left" onClick={()=> navigate("/consulta-lote")}  >Consultar lote </button>
                <button className="opcao-lote feminino" data-aos="fade-right" onClick={() => opcaoEscolhida("FEMININO") } >Sexo Feminino</button>
                <button className="opcao-lote masculino" data-aos="fade-left" onClick={() => opcaoEscolhida("MASCULINO") } >Sexo Masculino</button>
                <button className="opcao-lote dark" data-aos="fade-right" onClick={() => opcaoEscolhida("DARK") } >Galpão Dark</button>
                <button className="opcao-lote semi-dark" data-aos="fade-left" onClick={() => opcaoEscolhida("SEMIDARK") } >Galpão Semi-Dark</button>
                <button className="opcao-lote automatizado" data-aos="fade-right" onClick={() => opcaoEscolhida("AUTOMATIZADO") } >Galpão Automatizado</button>
            </div>

            {/* Div ativada na tela de 1024px */}
            <div className="box-opcao-lote-1024" data-aos="fade-up">
                <img className="galinhas" src={Galinhas} alt="galinhas em um terreiro" />
                <button className="opcao-lote todos-lotes" onClick={() => opcaoEscolhida("TODOSLOTES") } >Todos os lotes</button>
                <button className="opcao-lote consultar" onClick={()=> navigate("/consulta-lote")} >Consultar lote </button>
                <button className="opcao-lote feminino" onClick={() => opcaoEscolhida("FEMININO") } >Sexo Feminino</button>
                <button className="opcao-lote masculino" onClick={() => opcaoEscolhida("MASCULINO") } >Sexo Masculino</button>
                <button className="opcao-lote dark" onClick={() => opcaoEscolhida("DARK") } >Galpão Dark</button>
                <button className="opcao-lote semi-dark" onClick={() => opcaoEscolhida("SEMIDARK") } >Galpão Semi-Dark</button>
                <button className="opcao-lote automatizado" onClick={() => opcaoEscolhida("AUTOMATIZADO") } >Galpão Automatizado</button>
            </div>
        </div>
    )
}

export default LotesComponent;