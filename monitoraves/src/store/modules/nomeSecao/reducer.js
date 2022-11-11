const nomeSecaoReducer = (state="", action) => {
    
    switch (action.type) {
        case "@nomeSecao/GRAFICOS":
            
            return action.nome;

        case "@nomeSecao/TABELAS":
            
            return action.nome;
    
        default:
            return state;
    }
}

export default nomeSecaoReducer;