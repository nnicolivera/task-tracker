import * as actions from '../store/actionTypes'

export default function reducer(state = { items: [] }, action) {
    switch (action.type) {
        case actions.SET_COLOR:
            return {
                ...state,
                color: action.payload
            };
        case actions.GET_LIST:
            return {
                ...state.items,
                items: action.payload
            };
        case actions.GET_ITEM:
            return {
                items: [...state, state.items.filter(item => item.id === action.payload)]
            };
        case actions.ADD_ITEM:
            return {
                items: [...state.items, action.payload]
            };
        case actions.DEL_ITEM: {
            return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
        }
        case actions.UPD_ITEM:
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload ?
                    // transform the one with a matching id
                    { ...item, reminder: !item.reminder } :
                    // otherwise return original item
                    item
                )
            };
        case actions.RESET_LIST:
            return {
                items: [...state.items, []],
            };
        default:
            return state;
    }
}