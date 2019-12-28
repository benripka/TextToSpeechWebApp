
export const InitialState = {
    CurrentTab : 0
}

export const Reducer = (state, action) => {
    switch (action.type) {
        case "changeTab":
            return {
                CurrentTab : action.payload
            }
        case "resetTab":
            return {
                CurrentTab : 0
            }
        default:
            return state;
    }
}