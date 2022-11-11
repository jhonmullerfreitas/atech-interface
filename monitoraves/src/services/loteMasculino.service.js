import axios from "axios"

const lotesMasculinoService = async () =>{

    const response = await axios.get("http://localhost:3001/lotes/")
    .then((response) => response)

    const lotesMasculino = response.data.filter((lote) => lote.sexo === 'm')

    return lotesMasculino
}

export default lotesMasculinoService;