import "./styles.css"

const GraficosComponent = () =>{

    return(
        <div className="secao-graficos">

            <p className="titulo-secao">Gráficos</p>

            <div className="box-opcao-grafico">
                <button className="opcao-grafico morte-lote" data-aos="fade-right" >Mortalidade x Lote</button>
                <button className="opcao-grafico peso-lote" data-aos="fade-left" >Peso x Lote</button>
                <button className="opcao-grafico ca-lote" data-aos="fade-right" >CA x Lote</button>
                <button className="opcao-grafico peso-sexo" data-aos="fade-left" >Peso Médio x Sexo</button>
                <button className="opcao-grafico morte-sexo" data-aos="fade-right" >Mortalidade Média x Sexo</button>
            </div>
        </div>
    )
}

export default GraficosComponent