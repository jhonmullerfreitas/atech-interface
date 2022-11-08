import "./styles.css"
import Tabela from "../../assets/tabela.jpg"

const TabelasComponent = () =>{

    return(
        <div className="secao-tabelas">

            <p className="titulo-secao">Tabelas</p>

            <div className="box-opcao-tabela">
                <button className="opcao-tabela morte-lote" data-aos="fade-right" >Mortalidade x Lote</button>
                <button className="opcao-tabela peso-lote" data-aos="fade-left" >Peso x Lote</button>
                <button className="opcao-tabela ca-lote" data-aos="fade-right" >CA x Lote</button>
                <button className="opcao-tabela peso-sexo" data-aos="fade-left" >Peso Médio x Sexo</button>
                <button className="opcao-tabela morte-sexo" data-aos="fade-right" >Mortalidade Média x Sexo</button>
            </div>

            {/* Div ativada na tela 1024px */}
            <div className="box-opcao-tabela-1024" data-aos="fade-up">
                <img className="tabela-1024" src={Tabela} alt="" />
                <button className="opcao-tabela morte-lote"  >Mortalidade x Lote</button>
                <button className="opcao-tabela peso-lote"  >Peso x Lote</button>
                <button className="opcao-tabela ca-lote"  >CA x Lote</button>
                <button className="opcao-tabela peso-sexo"  >Peso Médio x Sexo</button>
                <button className="opcao-tabela morte-sexo"  >Mortalidade Média x Sexo</button>
            </div>
        </div>
    )
}

export default TabelasComponent