import "./styles.css"
import Grafico from "../../assets/grafico.jpg"

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

            {/* Div ativada na tela de 1024px */}
            <div className="box-opcao-grafico-1024" data-aos="fade-up">
                <img className="grafico-1024" src={Grafico} alt="imagem de um grafico de coluna e um grafico de linha." />
                <button className="opcao-grafico morte-lote" >Mortalidade x Lote</button>
                <button className="opcao-grafico peso-lote" >Peso x Lote</button>
                <button className="opcao-grafico ca-lote" >CA x Lote</button>
                <button className="opcao-grafico peso-sexo" >Peso Médio x Sexo</button>
                <button className="opcao-grafico morte-sexo" >Mortalidade Média x Sexo</button>
            </div>
        </div>
    )
}

export default GraficosComponent