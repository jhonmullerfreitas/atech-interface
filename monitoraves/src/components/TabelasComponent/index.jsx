import "./styles.css"
import Tabela from "../../assets/tabela.jpg"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { alterNomeTabela } from "../../store/modules/nomeSecao/actions"
import { tipoGraficoEscolhido } from "../../store/modules/tipoFiltro/actions"

const TabelasComponent = () =>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const opcaoEscolhida = (tipoTabela) => {
        navigate(`/filtro/${tipoTabela}`)
        dispatch(alterNomeTabela("Tabelas"))
        dispatch(tipoGraficoEscolhido(tipoTabela))
    }

    return(
        <div className="secao-tabelas">

            <p className="titulo-secao">Tabelas</p>

            <div className="box-opcao-tabela">
                <button className="opcao-tabela morte-lote" onClick={() => opcaoEscolhida("mortalidadexlote")} data-aos="fade-right">Mortalidade x Lote</button>
                <button className="opcao-tabela peso-lote" onClick={() => opcaoEscolhida("pesoxlote")} data-aos="fade-left" >Peso x Lote</button>
                <button className="opcao-tabela ca-lote" onClick={() => opcaoEscolhida("caxlote")} data-aos="fade-right" >CA x Lote</button>
                <button className="opcao-tabela peso-sexo" onClick={() => opcaoEscolhida("pmedioxsexo")} data-aos="fade-left" >Peso Médio x Sexo</button>
                <button className="opcao-tabela morte-sexo" onClick={() => opcaoEscolhida("mortemediaxsexo")} data-aos="fade-right" >Mortalidade Média x Sexo</button>
            </div>

            {/* Div ativada na tela 1024px */}
            <div className="box-opcao-tabela-1024" data-aos="fade-up">
                <img className="tabela-1024" src={Tabela} alt="" />
                <button className="opcao-tabela morte-lote" onClick={() => opcaoEscolhida("mortalidadexlote")} >Mortalidade x Lote</button>
                <button className="opcao-tabela peso-lote" onClick={() => opcaoEscolhida("pesoxlote")} >Peso x Lote</button>
                <button className="opcao-tabela ca-lote" onClick={() => opcaoEscolhida("caxlote")} >CA x Lote</button>
                <button className="opcao-tabela peso-sexo" onClick={() => opcaoEscolhida("pmedioxsexo")} >Peso Médio x Sexo</button>
                <button className="opcao-tabela morte-sexo" onClick={() => opcaoEscolhida("mortemediaxsexo")} >Mortalidade Média x Sexo</button>
            </div>
        </div>
    )
}

export default TabelasComponent