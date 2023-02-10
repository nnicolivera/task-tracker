import taskService from './services/tasks'

export default function reducer(state = {}, action) {
    if (action.type === "color") {
        return {
            ...state,
            color: action.payload.color
        }
    }

    if (action.type === "getTasks") {
        return [
            ...state,
            { tasks: action.payload.tasks }
        ]
    }

    return { ...state }
}   