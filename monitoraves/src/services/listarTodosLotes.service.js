import axios from "axios"

async function  listarTodosLotesService(){

    const response = await axios.get("http://localhost:3001/lotes/")
    .then((response) => response)

    return response.data
}

export default listarTodosLotesService;
