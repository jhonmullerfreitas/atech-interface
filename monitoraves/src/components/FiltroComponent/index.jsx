import "./styles.css"
import Lupa from "../../assets/lupa.png"

const FiltroComponent = ({tituloSecao, nomeGrafico}) => {

    return(
        <div className="secao-filtro" data-aos="fade-up">

            {/* {tituloSecao} */}
            <p className="titulo-secao">Titulo Secao</p> 

            <div className="busca-filtro">
                <div className="busca">

                    <input className="input-pesquisar" type="text" placeholder="Digite o id do lote" />
                    <button className="botao-pesquisar">
                        <img className="lupa" src={Lupa} alt="imagem de uma lupa bege"/>
                    </button>

                </div>

                {/* Select com as opções de gráficos */}
                <select className="grafico-escolha" name="grafico-escolha" id="grafico">
                    <option value="morte-lote">Morte x Lote</option>
                    <option value="peso-lote">Peso x Lote</option>
                    <option value="ca-lote">CA x Lote</option>
                    <option value="peso-medio">Peso Médio x Sexo</option>
                    <option value="morte-media">Morte Média x Sexo</option>
                </select>
                
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