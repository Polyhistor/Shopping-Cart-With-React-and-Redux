const itemListing = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_LISTING': {
            let newState = {};
            for (let key in state) {
                newState[key] = {...state[key]};
            }
            newState[action.item.id] = {
                id: action.item.id,
                name: action.item.name,
                price: action.item.price,
            };
            return newState
        }
        case 'REMOVE_LISTING':
            return state.filter(item => !(item.id === action.item.id));
        default:
            return state
    }
};

export default itemListing