import BasePage from "../../components/BasePageComponent";
import "./styles.css"

const Contato = () =>{
    return(
        <>
            <BasePage>
                <div className="container-contato">
                    <div className="contato">
                        <p>Desenvolvedor: Jhon Muller</p>
                        <p><a href="https://github.com/jhonmullerfreitas" target="blank" >Github</a> </p>
                        <p><a href="https://www.linkedin.com/in/jhonmullerfreitas/" target="blank">LinkedIn</a></p>
                        <p><a href="https://github.com/jhonmullerfreitas/atech-interface" target="blank">Repositório da Aplicação</a></p>
                    </div>
                </div>
            </BasePage>
        </>
    )
}

export default Contato;