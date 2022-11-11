import axios from "axios"

const lotesFemininosService = async () =>{

    const response = await axios.get("http://localhost:3001/lotes/")
    .then((response) => response)

    const lotesFemininos = response.data.filter((lote) => lote.sexo === 'f')

    return lotesFemininos
}

export default lotesFemininosService;