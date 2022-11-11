export const tipoGraficoEscolhido = (nomeGrafico) => {

    if(nomeGrafico === "mortalidadexlote"){
        return {type: "@tipoFiltro/MORTEXLOTE", tipo: "Mortalidade x Lote"}
    }
        
    if(nomeGrafico === "pesoxlote"){
        return {type: "@tipoFiltro/PESOXLOTE", tipo: "Peso x Lote"}
    }
        
    if(nomeGrafico === "caxlote"){
        return {type: "@tipoFiltro/CAXLOTE", tipo: "CA x Lote"}
    }
        
    if(nomeGrafico === "pmedioxsexo"){
        return {type: "@tipoFiltro/PESOMEDIOXSEXO", tipo: "Peso Médio x Sexo"}
    }
        
    if(nomeGrafico === "mortemediaxsexo"){
        return {type: "@tipoFiltro/MORTEMEDIAXSEXO", tipo: "Morte Média x Sexo"}
    }
                
    return {type: "@tipoFiltro/MORTEMEDIAXSEXO", tipo: "Mortalidade x Lote"}
} 
