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
                <ul className="opcao-menu-lateral">
                    <h5 className="resumo" onClick={()=> navigate("/resumo")} >Resumo</h5>
                    <li>Informações da granja</li>
                </ul>
                <ul className="opcao-menu-lateral">
                    <h5 className="lotes" onClick={()=> navigate("/lotes")} >Lotes</h5>
                    <li>Informações da granja</li>
                </ul>
                <ul className="opcao-menu-lateral">
                    <h5 className="graficos" onClick={()=> navigate("/graficos")} >Gráficos</h5>
                    <li>Informações da granja</li>
                </ul>
                <ul className="opcao-menu-lateral">
                    <h5 className="tabelas" onClick={()=> navigate("/tabelas")} >Tabelas</h5>
                    <li>Informações da granja</li>
                </ul>
            </nav>

            <section className="conteudo">
                {children}
            </section>
        </div>
    )
}

export default BasePage;