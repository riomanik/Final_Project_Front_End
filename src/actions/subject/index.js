export const selectSubjectAction = (subject) => {
    return {
        type: 'SELECT_SUBJECT',
        payload: subject
    };
};