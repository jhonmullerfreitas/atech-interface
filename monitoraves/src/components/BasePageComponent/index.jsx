import "./styles.css"
import LogoMonitoraves from "../../assets/LogoLogoMonitoraves.png"
import MinhaConta from "../../assets/MinhaConta.png"
import { useNavigate } from "react-router-dom"

const BasePage = ({children}) =>{

    const navigate = useNavigate()


    return(
        <div className="container-basepage">
            <header className="cabecalho">
                <img className="logoMonitorave" src={LogoMonitoraves} alt="Logo da Monitoraves representado por um frango em cima do nome monitoraves" onClick={()=> navigate("/")} />
                <ul className="menu-cabecalho">
                    <li onClick={()=> navigate("/")} >Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>

                <img className="minhaConta" src={MinhaConta} alt="" />                
            </header>

            <nav className="menu-lateral">
                <ul className="opcao-menu-lateral opcao-resumo">
                    <h5 className="resumo titulo-opcao" onClick={()=> navigate("/resumo")} >Resumo</h5>
                    <li>Informações da granja</li>
                </ul>
                <ul className="opcao-menu-lateral opcao-lotes">
                    <h5 className="lotes titulo-opcao" onClick={()=> navigate("/lotes")} >Lotes</h5>
                    <li>Todos os lotes</li>
                    <li>Listar um lote</li>
                </ul>
                <ul className="opcao-menu-lateral opcao-graficos">
                    <h5 className="graficos titulo-opcao" onClick={()=> navigate("/graficos")} >Gráficos</h5>
                    <li>Mortalidade x Lote</li>
                    <li>Peso x Lote</li>
                    <li>CA x Lote</li>
                    <li>Peso Médio x Sexo</li>
                    <li>Mortalidade Média x Sexo</li>
                </ul>
                <ul className="opcao-menu-lateral opcao-tabelas">
                    <h5 className="tabelas titulo-opcao" onClick={()=> navigate("/tabelas")} >Tabelas</h5>
                    <li>Mortalidade x Lote</li>
                    <li>Peso x Lote</li>
                    <li>CA x Lote</li>
                    <li>Peso Médio x Sexo</li>
                    <li>Mortalidade Média x Sexo</li>
                </ul>
            </nav>

            <section className="conteudo">
                {children}
            </section>
        </div>
    )
}

export default BasePage;