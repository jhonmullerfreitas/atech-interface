import axios from "axios"

const galpaoAutomatizadoService = async () =>{

    const response = await axios.get("http://localhost:3001/lotes/")
    .then((response) => response)

    const galpaoAutomatizado = response.data.filter((lote) => lote.tipoGalpao === 'Automatizado')

    return galpaoAutomatizado
}

export default galpaoAutomatizadoService;