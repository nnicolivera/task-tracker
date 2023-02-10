import * as actions from './actionTypes'

export const changeColor = color => {
    return { type: actions.SET_COLOR, payload: color };
}

export const setList = items => {
    return { type: actions.SET_LIST, payload: items };
}

export const resetList = () => {
    return { type: actions.RESET_LIST };
}

export const addItem = item => {
    return { type: actions.ADD_ITEM, payload: item };
}

export const delItem = id => {
    return { type: actions.DEL_ITEM, payload: id };
}