export const idClass = (idClass = {}, action) => {
    if (action.type === 'ID_CLASS') {
        return action.payload;
    }
    return idClass;
};

export const selectedClass = (selectedClass = {}, action) => {
    if (action.type === 'SELECTED_CLASS') {
        return action.payload;
    }
    return selectedClass;
};


export const traineeActiveClass = (traineeActiveClass = [], action) => {
    if (action.type === 'TRAINEE_ACTIVE_CLASS') {
        return action.payload;
    }
} 