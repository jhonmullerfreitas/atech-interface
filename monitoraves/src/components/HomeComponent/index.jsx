import "./styles.css"
import Frango from "../../assets/frango.jpg"
import Ovos from "../../assets/ovos.jpg"

import { useNavigate } from "react-router-dom"

const HomeComponent = () => {

    const navigate = useNavigate();

    return(
        <div className="container-homeComponent">
            <p className="texto-home" data-aos="fade-right" >Monitore sua produção com dados importantes para tomada de decisões.</p>
            <p className="texto-home" data-aos="fade-right">O melhor do aviário com o auxílio da tecnologia.</p>
            <div className="box-ovo-frango" data-aos="fade-left">
                <img className="ovos" src={Ovos} alt="imagem de ovos em uma cartela" />
                <img className="frango" src={Frango} alt="imagem de um frango olhando para a câmera" />
            </div>
            <button className="minhaGranja" onClick={()=> navigate('/resumo')} data-aos="fade-up" >
                Minha Granja
            </button>
        </div>
    )
}

export default HomeComponent;