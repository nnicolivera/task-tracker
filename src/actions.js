export const changeColor = color => ({
    type: "color",
    payload: {
        color
    }
})

export const getTasks = tasks => ({
    type: "getTasks",
    payload: {
        tasks
    }
})