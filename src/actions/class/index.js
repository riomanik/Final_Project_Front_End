export const idClass = (id) => {
    return {
        type: 'ID_CLASS',
        payload: id
    };
};

export const selectedClass = (selectedClass) => {
    return {
        type: 'SELECTED_CLASS',
        payload: selectedClass
    }
}


export const traineeActiveClass = (traineeActiveClass) => {
    return {
        type: 'TRAINEE_ACTIVE_CLASS',
        payload: traineeActiveClass
    }
}