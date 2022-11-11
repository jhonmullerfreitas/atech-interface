import axios from "axios"

const galpaoSemiDarkService = async () =>{

    const response = await axios.get("http://localhost:3001/lotes/")
    .then((response) => response)

    const galpaoSemiDark = response.data.filter((lote) => lote.tipoGalpao === 'Semi-Dark')

    return galpaoSemiDark
}

export default galpaoSemiDarkService;