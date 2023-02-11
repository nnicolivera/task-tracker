import * as actions from './actionTypes'

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
                items: [...state.items, state.items.filter(item => item.id === action.payload)]
            };
        case actions.ADD_ITEM:
            return {
                items: [...state.items, action.payload]
            };
        case actions.DEL_ITEM:
            return {
                items: [...state.items]
            };
        case actions.UPD_ITEM:
            return {
                items: [
                    ...state.items
                ],
            };
        case actions.RESET_LIST:
            return {
                items: [...state.items, []],
            };
        default:
            return state;
    }
}


// export default function reducer(state = {}, action) {
//     if (action.type === "color") {
//         return {
//             ...state,
//             color: action.payload.color
//         }
//     }

//     if (action.type === "getTasks") {
//         return [
//             ...state,
//             { tasks: action.payload.tasks }
//         ]
//     }

//     return { ...state }
// }   