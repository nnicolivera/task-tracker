import * as actions from './actionTypes'

export const changeColor = color => {
    return { type: actions.SET_COLOR, payload: color };
    // type: "color",
    // payload: {
    //     color
    // }
}

export const setList = items => {
    return { type: actions.SET_LIST, payload: items };
}

export const addItem = item => {
    return { type: actions.ADD_ITEM, payload: item };
}

export const resetList = () => {
    return { type: actions.RESET_LIST };
}

// export const getTasks = tasks => ({
//     type: "getTasks",
//     payload: {
//         tasks
//     }
// })