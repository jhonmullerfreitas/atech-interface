const tipoFiltroReducer = (state="", action) => {

    switch (action.type) {
        case "@tipoFiltro/MORTEXLOTE":
            
            return action.tipo;

        case "@tipoFiltro/PESOXLOTE":
        
            return action.tipo;

        case "@tipoFiltro/CAXLOTE":
        
            return action.tipo;
        case "@tipoFiltro/PESOMEDIOXSEXO":
        
            return action.tipo;

        case "@tipoFiltro/MORTEMEDIAXSEXO":
    
            return action.tipo;

        default:
            return state;
    }
}

export default tipoFiltroReducer;