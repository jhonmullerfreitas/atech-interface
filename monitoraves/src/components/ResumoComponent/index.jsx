import "./styles.css"

const ResumoComponent = () =>{


    return(
        <div className="secao-resumo">
            <p className="titulo-secao" data-aos="fade-down" >Informações da Granja</p>

            <div className="box-info-granja" data-aos="fade-down">
                <div className="info-granja total-lote">Informação aqui</div>
                <div className="info-granja percent-masc">Informação aqui</div>
                <div className="info-granja percent-fem">Informação aqui</div>

                <div className="info-granja gdark">Informação aqui</div>
                <div className="info-granja gsemi-dark">Informação aqui</div>
                <div className="info-granja gauto">Informação aqui</div>

                <div className="info-granja total-aves">Informação aqui</div>
                <div className="info-granja total-fem">Informação aqui</div>
                <div className="info-granja total-masc">Informação aqui</div>
            </div>
        </div>
    )
}

export default ResumoComponent;