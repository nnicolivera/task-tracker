import * as actions from './actionTypes'

export const changeColor = color => {
    return { type: actions.SET_COLOR, payload: color };
}

export const getList = items => {
    return { type: actions.GET_LIST, payload: items };
}

export const getItem = id => {
    return { type: actions.GET_ITEM, payload: id };
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

export const updItem = id => {
    return { type: actions.UPD_ITEM, payload: id };
}