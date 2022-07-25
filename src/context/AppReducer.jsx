export default (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favourites: [action.payload, ...state.favourites]
            }
        default:
            return state
    }
}