import "./styles.css"
import Galinhas from "../../assets/galinhas.jpg"

const LotesComponent = () =>{

    return(
        <div className="secao-lotes">
            <p className="titulo-section" >Lotes</p>

            <div className="box-opcao-lote">
                <button className="opcao-lote todos-lotes" data-aos="fade-right" >Todos os lotes</button>
                <button className="opcao-lote consultar" data-aos="fade-left" >Consultar lote </button>
                <button className="opcao-lote feminino" data-aos="fade-right" >Sexo Femnino</button>
                <button className="opcao-lote masculino" data-aos="fade-left" >Sexo Masculino</button>
                <button className="opcao-lote dark" data-aos="fade-right" >Galpão Dark</button>
                <button className="opcao-lote semi-dark" data-aos="fade-left" >Galpão Semi-Dark</button>
                <button className="opcao-lote automatizado" data-aos="fade-right" >Galpão Automatizado</button>
            </div>

            {/* Div ativada na tela de 1024px */}
            <div className="box-opcao-lote-1024" data-aos="fade-up">
                <img className="galinhas" src={Galinhas} alt="galinhas em um terreiro" />
                <button className="opcao-lote todos-lotes" >Todos os lotes</button>
                <button className="opcao-lote consultar" >Consultar lote </button>
                <button className="opcao-lote feminino" >Sexo Femnino</button>
                <button className="opcao-lote masculino" >Sexo Masculino</button>
                <button className="opcao-lote dark" >Galpão Dark</button>
                <button className="opcao-lote semi-dark" >Galpão Semi-Dark</button>
                <button className="opcao-lote automatizado" >Galpão Automatizado</button>
            </div>
        </div>
    )
}

export default LotesComponent;