import "./styles.css"
import LogoMonitoraves from "../../assets/LogoLogoMonitoraves.png"
import MinhaConta from "../../assets/MinhaConta.png"

const BasePage = ({children}) =>{
    return(
        <div className="container-basepage">
            <header className="cabecalho">
                <img className="logoMonitorave" src={LogoMonitoraves} alt="" />
                <ul className="menu-cabecalho">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>

                <img className="minhaConta" src={MinhaConta} alt="" />                
            </header>

            <nav className="menu-lateral">
                <ul className="opcao-menu-lateral">
                    <h5 className="resumo">Resumo</h5>
                    <li>Informações da granja</li>
                </ul>
                <ul className="opcao-menu-lateral">
                    <h5 className="lotes">Lotes</h5>
                    <li>Informações da granja</li>
                </ul>
                <ul className="opcao-menu-lateral">
                    <h5 className="graficos">Gráficos</h5>
                    <li>Informações da granja</li>
                </ul>
                <ul className="opcao-menu-lateral">
                    <h5 className="tabelas">Tabelas</h5>
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