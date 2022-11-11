export const mortalidadeFiltro = (info) => {
    
    if(info.tipo === "mortalidadexlote"){

        return {type: "@mortalidadeFiltro/MORTEXLOTE", mortes: info.mortes, lote: info.infoLote}
    }

    return {type: "@mortalidadeFiltro/MORTEXOTE", mortes: info.mortes}
}