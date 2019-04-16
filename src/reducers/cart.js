const addToCart = (state = {}, action) => {
    let quantity = 0;
    if(state[action.item.id] !== undefined)
        quantity = state[action.item.id].quantity;
    let newState = {};
    for(let key in state) {
        newState[key] = {...state[key]};
    }
    newState[action.item.id] = {
        quantity: quantity + 1,
        id: action.item.id,
    };
    return newState;
};

const itemDecrement = (state = {}, action) => {
    let quantity = 0;
    if(state[action.item.id] !== undefined)
        quantity = state[action.item.id].quantity;
    let newState = {};
    for(let key in state) {
        newState[key] = {...state[key]};
    }
    newState[action.item.id] = {
        quantity: quantity - 1,
        id: action.item.id,
    };
    return newState;
};

const itemChange = (state = {}, action) => {
    let quantity = action.item.quantity;
    let newState = {
    };
    for(let key in state) {
        newState[key] = {...state[key]};
    }
    if(quantity === 0)
        delete newState[action.item.id];
    else
        newState[action.item.id].quantity = quantity;
    return newState;
};

const shoppingCart = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return addToCart(state, action);
        case 'ITEM_CHANGE':
            return itemChange(state, action);
        case 'ITEM_DECREMENT':
            return itemDecrement(state, action);
        default:
            return state
    }
};

export default shoppingCart