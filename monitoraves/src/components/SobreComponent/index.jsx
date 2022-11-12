import "./styles.css"

const SobreComponent = () => {
    return(
        <div className="container-sobre" data-aos="fade-up">
            <div className="info-app" >
                <p>Aplicativo Web para monitoramento de Granja</p>
                <p>Desenvolvida em ReactJs</p>
            </div>

            <div className="info-contato">
                <p>Desenvolvedor: Jhon Muller</p>
                <p><a href="https://github.com/jhonmullerfreitas" target="blank">Github</a> </p>
                <p><a href="https://www.linkedin.com/in/jhonmullerfreitas/" target="blank">LinkedIn</a></p>
                <p><a href="https://github.com/jhonmullerfreitas/atech-interface" target="blank">Repositório da Aplicação</a></p>
            </div>
        </div>
    )
}

export default SobreComponent;