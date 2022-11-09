import "./styles.css"
import Tabela from "../../assets/tabela.jpg"
import { useNavigate } from "react-router-dom"

const TabelasComponent = () =>{

    const navigate = useNavigate()

    return(
        <div className="secao-tabelas">

            <p className="titulo-secao">Tabelas</p>

            <div className="box-opcao-tabela">
                <button className="opcao-tabela morte-lote" onClick={() => navigate("/filtro/mortalidadexlote")} data-aos="fade-right">Mortalidade x Lote</button>
                <button className="opcao-tabela peso-lote" onClick={() => navigate("/filtro/pesoxlote")} data-aos="fade-left" >Peso x Lote</button>
                <button className="opcao-tabela ca-lote" onClick={() => navigate("/filtro/caxlote")} data-aos="fade-right" >CA x Lote</button>
                <button className="opcao-tabela peso-sexo" onClick={() => navigate("/filtro/pmedioxsexo")} data-aos="fade-left" >Peso Médio x Sexo</button>
                <button className="opcao-tabela morte-sexo" onClick={() => navigate("/filtro/mortemediaxsexo")} data-aos="fade-right" >Mortalidade Média x Sexo</button>
            </div>

            {/* Div ativada na tela 1024px */}
            <div className="box-opcao-tabela-1024" data-aos="fade-up">
                <img className="tabela-1024" src={Tabela} alt="" />
                <button className="opcao-tabela morte-lote" onClick={() => navigate("/filtro/mortalidadexlote")} >Mortalidade x Lote</button>
                <button className="opcao-tabela peso-lote" onClick={() => navigate("/filtro/pesoxlote")} >Peso x Lote</button>
                <button className="opcao-tabela ca-lote" onClick={() => navigate("/filtro/caxlote")} >CA x Lote</button>
                <button className="opcao-tabela peso-sexo" onClick={() => navigate("/filtro/pmedioxsexo")} >Peso Médio x Sexo</button>
                <button className="opcao-tabela morte-sexo" onClick={() => navigate("/filtro/mortemediaxsexo")} >Mortalidade Média x Sexo</button>
            </div>
        </div>
    )
}

export default TabelasComponent