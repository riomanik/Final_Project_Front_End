export const selectedClassDetail = (selectedClassDetail = {}, action) => {
    if (action.type === 'SELECTED_CLASS_DETAIL') {
        return action.payload;
    }
    return selectedClassDetail;
};