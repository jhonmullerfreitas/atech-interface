const morteMediaSexoReducer = (state=[], action) => {
    switch (action.type) {
        case "@morteMedia/ADD":
            
            return action.dados;
    
        default:
            return state;
    }
}

export default morteMediaSexoReducer;