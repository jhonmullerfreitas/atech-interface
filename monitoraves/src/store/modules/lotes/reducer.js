
const lotesReducer = (state=[], action) => {

    switch (action.type) {
        case "@lotes/TODOSLOTES":
        
            return [action.lotes];

        case "@lotes/FEMININO":

            return [action.lotes]

        case "@lotes/MASCULINO":

            return [action.lotes]

        case "@lotes/DARK":

            return [action.lotes]

        case "@lotes/SEMIDARK":

            return [action.lotes]

        case "@lotes/AUTOMATIZADO":

            return [action.lotes]
    
        default:
            return state;
    }
}

export default lotesReducer;