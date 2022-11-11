export const tipoLoteEscolhido = (infoLote) => {

    if(infoLote.tipo === "TODOSLOTES"){
        return {type: "@lotes/TODOSLOTES", lotes: infoLote.lotesData}
    }
        
    if(infoLote.tipo === "FEMININO"){
        const lotesFeminino = infoLote.lotesData.filter((lote)=> lote.sexo === 'f')
        return {type: "@lotes/FEMININO", lotes: lotesFeminino}
    }
        
    if(infoLote.tipo === "MASCULINO"){
        const lotesMasculino = infoLote.lotesData.filter((lote)=> lote.sexo === 'm')
        return {type: "@lotes/MASCULINO", lotes: lotesMasculino}
    }
        
    if(infoLote.tipo === "DARK"){
        const galpaoDark = infoLote.lotesData.filter((lote)=> lote.tipoGalpao === 'Dark')
        return {type: "@lotes/DARK", lotes: galpaoDark}
    }
        
    if(infoLote.tipo === "SEMIDARK"){
        const galpaoSemiDark = infoLote.lotesData.filter((lote)=> lote.tipoGalpao === 'Semi-Dark')
        return {type: "@lotes/SEMIDARK", lotes: galpaoSemiDark}
    }

    if(infoLote.tipo === "AUTOMATIZADO"){
        const galpaoAuto = infoLote.lotesData.filter((lote)=> lote.tipoGalpao === 'Automatizado')
        return {type: "@lotes/AUTOMATIZADO", lotes: galpaoAuto}
    }
                
    return {type: "@lotes/TODOSLOTES", lotes: infoLote.lotesData}
} 