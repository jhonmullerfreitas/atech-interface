import "./styles.css"

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
        </div>
    )
}

export default TabelasComponent