import "./styles.css"
import Lupa from "../../assets/lupa.png"
import { useSelector } from "react-redux"


const FiltroComponent = () => {

    const tituloSecao = useSelector((store) => store.nomeSecao)
    const nomeFiltro = useSelector((store) => store.tipoFiltro)

    return(
        <div className="secao-filtro" data-aos="fade-up">

            <p className="titulo-secao">{tituloSecao}</p> 

            <div className="busca-filtro">
                <div className="busca">

                    <input className="input-pesquisar" type="text" placeholder="Digite o id do lote" />
                    <button className="botao-pesquisar">
                        <img className="lupa" src={Lupa} alt="imagem de uma lupa bege"/>
                    </button>

                </div>

                <p className="grafico-escolha">{nomeFiltro}</p>
                
            </div>

            <div className="info-img">
                <div className="info-lote">
                    <p>Info-lote</p>
                    <p>Info-lote</p>
                    <p>Info-lote</p>
                </div>
                <div className="espaco-vazio">Gŕafico ou Tabela</div>
            </div>
        </div>
    )
}

export default FiltroComponent;