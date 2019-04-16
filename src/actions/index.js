export const addItem = id => {
    return {
        type: 'ADD_TO_CART',
        item: {
            id: id
        }
    }
};

export const changeQuantity = (id, quantity) => {
    return {
        type: 'ITEM_CHANGE',
        item: {
            id: id,
            quantity: quantity
        }
    }
};

export const decrementItem = (id) => {
    return {
        type: 'ITEM_DECREMENT',
        item: {
            id: id
        }
    }
};

export const notify = () => {
    return {
        type: "SHOW_NOTIFICATION"
    }
};

export const disableNotify = () => {
    return {
        type: "REMOVE_NOTIFICATION"
    }
};