import axios from "axios"

const galpaoDarkService = async () =>{

    const response = await axios.get("http://localhost:3001/lotes/")
    .then((response) => response)

    const galpaoDark = response.data.filter((lote) => lote.tipoGalpao === 'Dark')

    return galpaoDark
}

export default galpaoDarkService;