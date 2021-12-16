const filterReducerDefaultState = {
    text: '',
    sortBy: 'createdAt',
}

const filterReducer = (state = filterReducerDefaultState,action) => {
    switch(action.type){
        
        default:
            return state
    }
}

export default filterReducer;