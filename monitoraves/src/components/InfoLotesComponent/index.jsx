import "./styles.css"

import { useSelector } from "react-redux"

const InfoLotesComponent = () => {

    const lotes = useSelector((store) => store.lotesInfo)
    
    return(
        <div className="container-infoLote">
            <p className="titulo-secao">Informação dos Lotes</p>
            <div className="box-infos">
                {
                    lotes[0].map((lote, index) => 
                        <div className="info-lote" key={index}>
                            <p>ID: {lote.id},  Galpão: {lote.tipoGalpao}</p>
                            <p>Sexo: {lote.sexo}, Total Aves: {lote.qtdAves}</p>
                            <p>Estação: {lote.estacao}, Linhagem: {lote.linhagem}</p>
                            <p>Tratamento: {lote.tratamento}, Aspecto: {lote.aspectoLote}</p>
                            <p>Uniformidade: {lote.uniformidade}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default InfoLotesComponent;