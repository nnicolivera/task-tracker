import * as actions from './actionTypes'

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

export default function reducer(state = { items: [] }, action) {
    switch (action.type) {
        case actions.SET_COLOR:
            return {
                ...state,
                color: action.payload
            };
        case actions.SET_LIST:
            return {
                ...state.items,
                items: action.payload
            };
        case actions.ADD_ITEM:
            return {
                items: [...state.items, action.payload]
            };
        case actions.RESET_LIST:
            return {
                items: [...state.items, []],
            };
        default:
            return state;
    }
}