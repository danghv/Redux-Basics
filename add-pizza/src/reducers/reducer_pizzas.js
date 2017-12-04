export default function(state=[], action) {
    switch(action.type) {
        case 'ADD_PIZZA':
            return [ ...state, { id: action.payload + 1, visible: true } ];
        case 'DELETE_PIZZA':
            return state.map((item) => {
                if(item.id === action.payload) {
                    return { id: item.id, visible: false }
                } else {
                    return item;
                }
            });
        default: 
            return state;
    }
}