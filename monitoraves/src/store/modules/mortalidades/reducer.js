const mortalidadesReducer = (state=[], action) => {

    switch (action.type) {
        case "@mortalidadeFiltro/MORTEXLOTE":

            return [action.mortes, action.lote];

        case "@mortalidadeFiltro/MORTEXSEXO":
            return [action.mortes];
    
        default:
            return state;
    }
}

export default mortalidadesReducer;