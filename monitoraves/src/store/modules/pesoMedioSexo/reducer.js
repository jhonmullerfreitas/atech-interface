const pesoMedioSexoReducer = (state=[], action) => {
    switch (action.type) {
        case "@pesoMedio/ADD":
            
            return action.dados;
    
        default:
            return state;
    }
}


export default pesoMedioSexoReducer;