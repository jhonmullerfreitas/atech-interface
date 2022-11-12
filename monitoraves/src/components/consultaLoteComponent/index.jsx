import { useState, useEffect } from "react";
import axios from "axios"
import "./styles.css"

const ConsultaLoteComponent = () =>{

    const [lote, setLote] = useState([])
    const [input, setInput] = useState(0)
    const [idReq, setIdReq] = useState(1)

    useEffect(()=>{
        axios.get(`http://localhost:3001/lotes/${idReq}`)
        .then((response) => setLote(response.data))
    },[idReq])

    const alteraId = () =>{
        setIdReq(input)
    }

    return(
        <>
        {
            lote ?
            <div className="container-consulta">
                <div className="box-pesquisa">
                    <input className="input-listar" type="number" placeholder="ID" onChange={(e)=> setInput(e.target.value) } />
                    <button className="botao-listar" onClick={() => alteraId() }>Listar</button>
                </div>

                
                <div className="info">
                        <p>ID: {lote.id}</p>
                        <p>Nascimento: {lote.dataNascimento}</p>
                        <p>Sexo: {lote.sexo}</p>
                        <p>Galpão: {lote.tipoGalpao}</p>
                        <p>Total Aves: {lote.qtdAves}</p>
                        <p>Estação: {lote.estacao}</p>
                        <p>Tratamento: {lote.tratamento}</p>
                        <p>Aspecto: {lote.aspectoLote}</p>
                        <p>Uniformidade: {lote.uniformidade}</p>
                </div>
            </div>:

            <p>Carregando</p>
        }

        
        </>
    )
}

export default ConsultaLoteComponent;