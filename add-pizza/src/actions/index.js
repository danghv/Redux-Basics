export function handleClickAdd(len) {
    return {
        type: 'ADD_PIZZA',
        payload: len
    }
}

export function handleDeletePizza(id) {
    // this.setState({ pizzas });
    return {
        type: 'DELETE_PIZZA',
        payload: id
    }
}
