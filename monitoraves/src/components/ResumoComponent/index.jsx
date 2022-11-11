import "./styles.css"
import axios from "axios"
import { useState, useEffect } from "react"

const ResumoComponent = () =>{

    const [infoGranja, setInfoGranja] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/info-granja/")
        .then((response) => setInfoGranja(response.data))
    },[])

    return(
        <div className="secao-resumo">
            <p className="titulo-secao" data-aos="fade-up" >Informações da Granja</p>

            <div className="box-info-granja" data-aos="fade-up">
                {
                    infoGranja ? 
                    <>
                    <div className="info-granja total-lote">Lotes: {infoGranja.qtdLotes}</div>
                    <div className="info-granja percent-masc">Total Aves Masculina: {infoGranja.avesMasc}</div>
                    <div className="info-granja percent-fem">Total Aves Feminina: {infoGranja.avesFem}</div>

                    <div className="info-granja gdark">Galpão Dark: {infoGranja.dark}</div>
                    <div className="info-granja gsemi-dark">Galpão Semi-Dark: {infoGranja.semiDark}</div>
                    <div className="info-granja gauto">Galpão Automatizado: {infoGranja.gAuto}</div>

                    <div className="info-granja total-aves">Aspecto Bom: {infoGranja.aspBom}</div>
                    <div className="info-granja total-fem">Aspecto Regular: {infoGranja.aspRegular}</div>
                    <div className="info-granja total-masc">Aspecto Ruim: {infoGranja.aspRuim}</div>
                    </> :
                    <p>Carregando</p>
                }
            </div>
        </div>
    )
}

export default ResumoComponent;