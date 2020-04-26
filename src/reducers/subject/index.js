export const selectSubjectReducer = (selectSubject = {}, action) => {
    if (action.type === 'SELECT_SUBJECT') {
        return action.payload;
    }
    return selectSubject;
};


