const idFiltroReducer = (state=1, action) => {

    switch (action.type) {
        case "@mudaId/MUDAR":
            
            return action.id;
    
        default:
            return state;
    }
}
export default idFiltroReducer;